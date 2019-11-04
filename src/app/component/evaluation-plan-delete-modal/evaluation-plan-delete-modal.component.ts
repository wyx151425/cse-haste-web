import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {ModalService} from '../../service/modal.service';
import {HasteCallback} from '../../model/util/haste-callback';
import {EvaluationPlanService} from '../../service/evaluation-plan.service';
import {PromptService} from '../../service/prompt.service';

@Component({
  selector: 'app-evaluation-plan-delete-modal',
  templateUrl: './evaluation-plan-delete-modal.component.html',
  styleUrls: ['./evaluation-plan-delete-modal.component.css']
})
export class EvaluationPlanDeleteModalComponent implements OnInit, HasteCallback<EvaluationPlan> {

  private isBtnDisabled = false;
  private evaluationPlan: EvaluationPlan;

  @Output()
  private emitter = new EventEmitter<EvaluationPlan>();

  constructor(private evaluationPlanService: EvaluationPlanService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.deleteEvaluationPlanObservable.subscribe((evaluationPlan: EvaluationPlan) => this.evaluationPlan = evaluationPlan);
  }

  public deleteEvaluationPlan(): void {
    this.evaluationPlanService.deleteEvaluationPlan(this.evaluationPlan, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(plan: EvaluationPlan): void {
    this.emitter.emit(this.evaluationPlan);
    this.promptService.pushSuccess('删除成功');
    this.modalService.dismissDeleteEvaluationPlanModal();
    this.isBtnDisabled = false;
  }
}
