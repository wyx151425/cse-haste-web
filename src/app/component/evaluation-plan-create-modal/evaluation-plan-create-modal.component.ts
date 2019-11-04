import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {PromptService} from '../../service/prompt.service';
import {EvaluationPlanService} from '../../service/evaluation-plan.service';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-evaluation-plan-add-modal',
  templateUrl: './evaluation-plan-create-modal.component.html',
  styleUrls: ['./evaluation-plan-create-modal.component.css']
})
export class EvaluationPlanCreateModalComponent implements OnInit, HasteCallback<EvaluationPlan> {

  private isBtnDisabled = false;
  private evaluationPlan: EvaluationPlan;

  @Output()
  private emitter = new EventEmitter<EvaluationPlan>();

  constructor(private evaluationPlanService: EvaluationPlanService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
    this.evaluationPlan = new EvaluationPlan();
    this.evaluationPlan.type = 0;
  }

  public saveEvaluationPlan(): void {
    if (null == this.evaluationPlan.name || '' === this.evaluationPlan.name) {
      this.promptService.pushWarning('请填写考核评价计划的名称');
      return;
    }
    if (null == this.evaluationPlan.type || 0 === this.evaluationPlan.type) {
      this.promptService.pushWarning('请选择考核评价计划的类型');
      return;
    }
    this.isBtnDisabled = true;
    this.evaluationPlanService.saveEvaluationPlan(this.evaluationPlan, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(plan: EvaluationPlan): void {
    this.emitter.emit(plan);
    this.promptService.pushSuccess('创建成功');
    this.modalService.dismissCreateEvaluationPlanModal();
    this.isBtnDisabled = false;
  }
}
