import {Component, OnInit} from '@angular/core';
import {Evaluatee} from '../../model/evaluatee';
import {Response} from '../../model/dto/response';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../service/modal.service';
import {EvaluationPlanService} from '../../service/evaluation-plan.service';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {EvaluationScoreFormService} from '../../service/evaluation-score-form.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-evaluation-plan-evaluatee-list',
  templateUrl: './evaluation-plan-evaluatee-list.component.html',
  styleUrls: ['./evaluation-plan-evaluatee-list.component.css']
})
export class EvaluationPlanEvaluateeListComponent implements OnInit {

  private evaluationPlan: EvaluationPlan;
  private evaluatees: Array<Evaluatee>;

  constructor(private evaluationPlanService: EvaluationPlanService, private evaluationScoreFormService: EvaluationScoreFormService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
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
    this.evaluationScoreFormService.exportEvaluationScoreFormsByEvaluatee(evaluatee).subscribe((response: HttpResponse<any>) => {
      if (!response) {
        this.promptService.pushError('导出失败');
        return;
      }
      const url = window.URL.createObjectURL(new Blob([response.body],
        {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}));
      const link = document.createElement('a');
      link.style.display = 'none';
      let name = decodeURI((response.headers.get('content-disposition').split('filename='))[1]);
      const userAgent = navigator.userAgent;
      if (userAgent.indexOf('Edge') > -1) {
        name += '.xlsx';
      }
      link.download = name;
      link.href = url;

      document.body.appendChild(link);
      link.click();
    });
  }
}
