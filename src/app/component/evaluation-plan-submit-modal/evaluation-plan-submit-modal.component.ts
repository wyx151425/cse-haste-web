import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {ModalService} from '../../service/modal.service';
import {HasteCallback} from '../../model/util/haste-callback';
import {EvaluationPlanService} from '../../service/evaluation-plan.service';
import {PromptService} from '../../service/prompt.service';

@Component({
  selector: 'app-evaluation-plan-submit-modal',
  templateUrl: './evaluation-plan-submit-modal.component.html',
  styleUrls: ['./evaluation-plan-submit-modal.component.css']
})
export class EvaluationPlanSubmitModalComponent implements OnInit, HasteCallback<EvaluationPlan> {

  private isBtnDisabled = false;
  private evaluationPlan: EvaluationPlan;

  @Output()
  private emitter = new EventEmitter<EvaluationPlan>();

  constructor(private evaluationPlanService: EvaluationPlanService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.submitEvaluationPlanObservable.subscribe((evaluationPlan: EvaluationPlan) => this.evaluationPlan = evaluationPlan);
  }

  public submitEvaluationPlan(): void {
    this.isBtnDisabled = true;
    this.evaluationPlanService.submitEvaluationPlan(this.evaluationPlan, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(evaluationPlan: EvaluationPlan): void {
    this.emitter.emit(evaluationPlan);
    this.promptService.pushSuccess('提交成功');
    this.modalService.dismissSubmitEvaluationPlanModal();
    this.isBtnDisabled = false;
  }

}
