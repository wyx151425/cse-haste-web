import { Component, OnInit } from '@angular/core';
import {Response} from '../../model/dto/response';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../service/modal.service';
import {EvaluationScoreForm} from '../../model/evaluation-score-form';

@Component({
  selector: 'app-evaluation-score-form-list',
  templateUrl: './evaluation-score-form-list.component.html',
  styleUrls: ['./evaluation-score-form-list.component.css']
})
export class EvaluationScoreFormListComponent implements OnInit {

  private evaluationScoreForms: Array<EvaluationScoreForm>;

  constructor(private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Array<EvaluationScoreForm>> }) => {
      if (200 === data.response.statusCode) {
        this.evaluationScoreForms = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }
}
