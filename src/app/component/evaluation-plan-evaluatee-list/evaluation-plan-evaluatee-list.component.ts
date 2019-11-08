import {Component, OnInit} from '@angular/core';
import {Evaluatee} from '../../model/evaluatee';
import {Response} from '../../model/dto/response';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../service/modal.service';
import {EvaluationPlanService} from '../../service/evaluation-plan.service';
import {EvaluationPlan} from '../../model/evaluation-plan';

@Component({
  selector: 'app-evaluation-plan-evaluatee-list',
  templateUrl: './evaluation-plan-evaluatee-list.component.html',
  styleUrls: ['./evaluation-plan-evaluatee-list.component.css']
})
export class EvaluationPlanEvaluateeListComponent implements OnInit {

  private evaluationPlan: EvaluationPlan;
  private evaluatees: Array<Evaluatee>;

  constructor(private evaluationPlanService: EvaluationPlanService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
    this.evaluationPlan = new EvaluationPlan();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Array<Evaluatee>> }) => {
      if (200 === data.response.statusCode) {
        this.evaluatees = data.response.data;
        const evaluationPlanId: number = Number(this.route.snapshot.paramMap.get('evaluationPlanId'));
        this.evaluationPlanService.getEvaluationPlanById(evaluationPlanId, null).subscribe(response => {
          if (200 === response.statusCode) {
            this.evaluationPlan = response.data;
          }
        });
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public deleteEvaluatee(evaluatee: Evaluatee): void {
    const index = this.evaluatees.indexOf(evaluatee);
    this.evaluatees.splice(index, 1);
  }


  public exportEvaluationScoreForm(evaluatee: Evaluatee): void {

  }
}
