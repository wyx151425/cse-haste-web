import {Component, OnInit} from '@angular/core';
import {Evaluatee} from '../../model/evaluatee';
import {HasteCallback} from '../../model/util/haste-callback';
import {Response} from '../../model/dto/response';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {EvaluateeService} from '../../service/evaluatee.service';
import {User} from '../../model/user';
import {ModalService} from '../../service/modal.service';
import {EvaluationPlanService} from '../../service/evaluation-plan.service';
import {EvaluationPlan} from '../../model/evaluation-plan';

@Component({
  selector: 'app-evaluation-plan-evaluatee-select',
  templateUrl: './evaluation-plan-evaluatee-select.component.html',
  styleUrls: ['./evaluation-plan-evaluatee-select.component.css']
})
export class EvaluationPlanEvaluateeSelectComponent implements OnInit, HasteCallback<Evaluatee> {

  private evaluationPlan: EvaluationPlan;
  private users: Array<User>;

  constructor(private evaluationPlanService: EvaluationPlanService, private evaluateeService: EvaluateeService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
    this.evaluationPlan = new EvaluationPlan();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Array<User>> }) => {
      if (200 === data.response.statusCode) {
        this.users = data.response.data;
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

  public addEvaluatee(user: User): void {
    const evaluatee = new Evaluatee();
    evaluatee.user = user;
    evaluatee.evaluationPlan = this.evaluationPlan;
    this.evaluateeService.addEvaluatee(evaluatee, this).subscribe();
  }

  public deleteEvaluatee(evaluatee: Evaluatee): void {
    for (const user of this.users) {
      if (evaluatee.userId === user.id) {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        break;
      }
    }
  }

  onError(message: string): void {
    this.promptService.pushError(message);
  }

  onSuccess(evaluatee: Evaluatee): void {
    this.deleteEvaluatee(evaluatee);
    this.promptService.pushSuccess('添加成功');
  }
}
