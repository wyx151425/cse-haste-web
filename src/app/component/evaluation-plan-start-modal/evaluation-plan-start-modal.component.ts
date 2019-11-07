import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {ModalService} from '../../service/modal.service';
import {HasteCallback} from '../../model/util/haste-callback';
import {EvaluationPlanService} from '../../service/evaluation-plan.service';
import {PromptService} from '../../service/prompt.service';

@Component({
  selector: 'app-evaluation-plan-start-modal',
  templateUrl: './evaluation-plan-start-modal.component.html',
  styleUrls: ['./evaluation-plan-start-modal.component.css']
})
export class EvaluationPlanStartModalComponent implements OnInit, HasteCallback<EvaluationPlan> {

  private isBtnDisabled = false;
  private evaluationPlan: EvaluationPlan;

  @Output()
  private emitter = new EventEmitter<EvaluationPlan>();

  constructor(private evaluationPlanService: EvaluationPlanService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.startEvaluationPlanObservable.subscribe((evaluationPlan: EvaluationPlan) => this.evaluationPlan = evaluationPlan);
  }

  public startEvaluationPlan(): void {
    this.isBtnDisabled = true;
    this.evaluationPlanService.startEvaluationPlan(this.evaluationPlan, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(evaluationPlan: EvaluationPlan): void {
    this.emitter.emit(evaluationPlan);
    this.promptService.pushSuccess('启动成功');
    this.modalService.dismissStartEvaluationPlanModal();
    this.isBtnDisabled = false;
  }
}
