import {Component, OnInit} from '@angular/core';
import {Response} from '../../model/dto/response';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../service/modal.service';
import {EvaluationScoreForm} from '../../model/evaluation-score-form';
import {EvaluationGroup} from '../../model/evaluation-group';
import {EvaluationGroupService} from '../../service/evaluation-group.service';

@Component({
  selector: 'app-evaluation-score-form-list',
  templateUrl: './evaluation-score-form-list.component.html',
  styleUrls: ['./evaluation-score-form-list.component.css']
})
export class EvaluationScoreFormListComponent implements OnInit {

  private evaluationGroup: EvaluationGroup;
  private evaluationScoreForms: Array<EvaluationScoreForm>;

  constructor(private evaluationGroupService: EvaluationGroupService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
    this.evaluationGroup = new EvaluationGroup();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Array<EvaluationScoreForm>> }) => {
      if (200 === data.response.statusCode) {
        this.evaluationScoreForms = data.response.data;
        const evaluationGroupId = Number(this.route.snapshot.paramMap.get('evaluationGroupId'));
        this.evaluationGroupService.getEvaluationGroupById(evaluationGroupId, null).subscribe(response => {
          if (200 === response.statusCode) {
            this.evaluationGroup = response.data;
          }
        });
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }
}
