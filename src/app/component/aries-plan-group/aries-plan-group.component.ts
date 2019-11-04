import { Component, OnInit } from '@angular/core';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {Response} from '../../model/dto/response';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {EvaluationGroup} from '../../model/evaluation-group';

@Component({
  selector: 'app-aries-plan-group',
  templateUrl: './aries-plan-group.component.html',
  styleUrls: ['./aries-plan-group.component.css']
})
export class AriesPlanGroupComponent implements OnInit {

  private group: EvaluationGroup;

  constructor(
    private modalService: ModalService,
    private promptService: PromptService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<EvaluationGroup> }) => {
      if (200 === data.response.statusCode) {
        this.group = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

}
