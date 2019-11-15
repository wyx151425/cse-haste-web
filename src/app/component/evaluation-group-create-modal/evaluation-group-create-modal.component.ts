import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {EvaluationGroup} from '../../model/evaluation-group';
import {EvaluationGroupService} from '../../service/evaluation-group.service';
import {EvaluationPlan} from '../../model/evaluation-plan';

@Component({
  selector: 'app-evaluation-group-create-modal',
  templateUrl: './evaluation-group-create-modal.component.html',
  styleUrls: ['./evaluation-group-create-modal.component.css']
})
export class EvaluationGroupCreateModalComponent implements OnInit {

  private isBtnDisabled = false;
  private evaluationPlan: EvaluationPlan;
  private evaluationGroup: EvaluationGroup;

  @Output()
  private emitter = new EventEmitter<EvaluationGroup>();

  constructor(private evaluationGroupService: EvaluationGroupService, private modalService: ModalService, private promptService: PromptService) {
    this.evaluationGroup = new EvaluationGroup();
    this.evaluationGroup.evaluationScoreFormType = 0;
  }

  ngOnInit() {
    this.modalService.createEvaluationGroupObservable.subscribe((evaluationPlan: EvaluationPlan) => this.evaluationPlan = evaluationPlan);
  }

  public saveEvaluationGroup(): void {
    if (null == this.evaluationGroup.name || '' === this.evaluationGroup.name) {
      this.promptService.pushWarning('请填写考核评价评分组的名称');
      return;
    }
    if (300 === this.evaluationPlan.type) {
      if (null === this.evaluationGroup.evaluationScoreFormType || 0 === this.evaluationGroup.evaluationScoreFormType) {
        this.promptService.pushWarning('请选择评分表的类型');
        return;
      }
    }
    this.isBtnDisabled = true;
    this.evaluationGroup.evaluationPlan = this.evaluationPlan;
    this.evaluationGroupService.saveEvaluationGroup(this.evaluationGroup, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(evaluationGroup: EvaluationGroup): void {
    this.emitter.emit(evaluationGroup);
    this.promptService.pushSuccess('创建成功');
    this.modalService.dismissCreateEvaluationGroupModal();
    this.isBtnDisabled = false;
  }
}
