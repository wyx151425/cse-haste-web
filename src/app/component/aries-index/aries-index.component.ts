import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Response} from '../../model/dto/response';
import {HasteService} from '../../model/util/haste-service';
import {Evaluatee} from '../../model/evaluatee';
import {PromptService} from '../../service/prompt.service';
import {EvaluationGroup} from '../../model/evaluation-group';
import {ModalService} from '../../service/modal.service';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-aries-index',
  templateUrl: './aries-index.component.html',
  styleUrls: ['./aries-index.component.css']
})
export class AriesIndexComponent implements OnInit {

  private group: EvaluationGroup;
  private judge: User;

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private promptService: PromptService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.judge = this.userService.getLocalUser();
    this.route.data.subscribe((data: { response: Response<EvaluationGroup> }) => {
      if (200 === data.response.statusCode) {
        this.group = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

}
