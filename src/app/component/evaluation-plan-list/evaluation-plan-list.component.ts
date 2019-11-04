import {Component, OnInit} from '@angular/core';
import {Response} from '../../model/dto/response';
import {ActivatedRoute} from '@angular/router';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';

@Component({
  selector: 'app-evaluation-plan-list',
  templateUrl: './evaluation-plan-list.component.html',
  styleUrls: ['./evaluation-plan-list.component.css']
})
export class EvaluationPlanListComponent implements OnInit {

  private evaluationPlans: Array<EvaluationPlan>;

  constructor(private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Array<EvaluationPlan>> }) => {
      if (200 === data.response.statusCode) {
        this.evaluationPlans = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public getNewEvaluationPlan(evaluationPlan: EvaluationPlan): void {
    this.evaluationPlans.push(evaluationPlan);
  }

  public deleteEvaluationPlan(evaluationPlan: EvaluationPlan): void {
    const index = this.getEvaluationPlanIndex(evaluationPlan);
    this.evaluationPlans.splice(index, 1);
  }

  public startEvaluationPlan(evaluationPlan: EvaluationPlan): void {
    const index = this.getEvaluationPlanIndex(evaluationPlan);
    this.evaluationPlans[index] = evaluationPlan;
  }

  public submitEvaluationPlan(evaluationPlan: EvaluationPlan): void {
    const index = this.getEvaluationPlanIndex(evaluationPlan);
    this.evaluationPlans[index] = evaluationPlan;
  }

  private getEvaluationPlanIndex(evaluationPlan: EvaluationPlan): number {
    for (let index = 0; index < this.evaluationPlans.length; index++) {
      if (evaluationPlan.id === this.evaluationPlans[index].id) {
        return index;
      }
    }
  }
}
