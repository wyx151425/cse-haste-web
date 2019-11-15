import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {EvaluationGroup} from '../../model/evaluation-group';
import {EvaluationGroupService} from '../../service/evaluation-group.service';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-evaluation-group-name-update-modal',
  templateUrl: './evaluation-group-name-update-modal.component.html',
  styleUrls: ['./evaluation-group-name-update-modal.component.css']
})
export class EvaluationGroupNameUpdateModalComponent implements OnInit, HasteCallback<EvaluationGroup> {

  private isBtnDisabled = false;

  private evaluationGroupName: string;
  private evaluationGroup: EvaluationGroup;

  constructor(private evaluationGroupService: EvaluationGroupService, private promptService: PromptService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.updateEvaluationGroupNameObservable.subscribe((evaluationGroup: EvaluationGroup) => {
      this.evaluationGroup = evaluationGroup;
    });
  }

  public updateEvaluationGroupName(): void {
    if (null === this.evaluationGroupName || '' === this.evaluationGroupName) {
      this.promptService.pushWarning('请填写评分组新名称');
      return;
    }
    this.isBtnDisabled = true;
    const evaluationGroup: EvaluationGroup = new EvaluationGroup();
    evaluationGroup.id = this.evaluationGroup.id;
    evaluationGroup.name = this.evaluationGroupName;
    this.evaluationGroupService.updateEvaluationGroupName(evaluationGroup, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(object: EvaluationGroup): void {
    this.promptService.pushSuccess('更新成功');
    this.evaluationGroup.name = object.name;
    this.modalService.dismissUpdateEvaluationGroupNameModal();
    this.isBtnDisabled = false;
  }
}
