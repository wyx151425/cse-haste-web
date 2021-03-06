import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {ModalService} from '../../service/modal.service';
import {Evaluator} from '../../model/evaluator';
import {Response} from '../../model/dto/response';
import {EvaluationGroupService} from '../../service/evaluation-group.service';
import {EvaluationGroup} from '../../model/evaluation-group';

@Component({
  selector: 'app-evaluator-list',
  templateUrl: './evaluation-group-evaluator-list.component.html',
  styleUrls: ['./evaluation-group-evaluator-list.component.css']
})
export class EvaluationGroupEvaluatorListComponent implements OnInit {

  private evaluationGroup: EvaluationGroup;
  private evaluators: Array<Evaluator>;

  constructor(private evaluationGroupService: EvaluationGroupService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
    this.evaluationGroup = new EvaluationGroup();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Array<Evaluator>> }) => {
      if (200 === data.response.statusCode) {
        this.evaluators = data.response.data;
        const evaluationGroupId: number = Number(this.route.snapshot.paramMap.get('evaluationGroupId'));
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

  public deleteEvaluator(evaluator: Evaluator): void {
    const index = this.evaluators.indexOf(evaluator);
    this.evaluators.splice(index, 1);
  }
}
