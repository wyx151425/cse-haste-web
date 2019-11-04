import {Component, OnInit} from '@angular/core';
import {Response} from '../../model/dto/response';
import {Evaluatee} from '../../model/evaluatee';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';

@Component({
  selector: 'app-aries-candidate-info',
  templateUrl: './aries-candidate-info.component.html',
  styleUrls: ['./aries-candidate-info.component.css']
})
export class AriesCandidateInfoComponent implements OnInit {

  private candidate: Evaluatee;

  constructor(
    private promptService: PromptService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Evaluatee> }) => {
      if (200 === data.response.statusCode) {
        this.candidate = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

}
