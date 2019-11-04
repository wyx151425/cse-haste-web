import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {ActivatedRoute} from '@angular/router';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {EvaluationPlanService} from '../../service/evaluation-plan.service';
import {EvaluateeService} from '../../service/evaluatee.service';
import {PromptService} from '../../service/prompt.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-vote-export-modal',
  templateUrl: './vote-export-modal.component.html',
  styleUrls: ['./vote-export-modal.component.css']
})
export class VoteExportModalComponent implements OnInit {

  private plan: EvaluationPlan;
  private targetPosition = '请选择';
  private positions: Array<string>;
  private isBtnDisabled = false;

  constructor(private planService: EvaluationPlanService,
              private candidateService: EvaluateeService,
              private modalService: ModalService,
              private promptService: PromptService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.modalService.exportEvaluationScoreFormsObservable.subscribe((plan: EvaluationPlan) => {
      this.plan = plan;
      this.planService.getPositionsByPlan(this.plan.id, null).subscribe(response => {
        this.positions = response.data;
      });
    });
  }

  public selectPosition(value: string): void {
    this.targetPosition = value;
  }

  public exportVote(): void {
    if ('请选择' === this.targetPosition) {
      this.promptService.pushWarning('请选择评审表决表类别');
      return;
    }
    this.isBtnDisabled = true;
    this.candidateService.exportVote(this.plan.id, this.targetPosition).subscribe(
      (response: HttpResponse<any>) => {
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
        this.isBtnDisabled = false;
      }
    );
  }
}
