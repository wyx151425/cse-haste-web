import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {EvaluationGroup} from '../../model/evaluation-group';
import {EvaluationGroupService} from '../../service/evaluation-group.service';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-evaluation-group-delete-modal',
  templateUrl: './evaluation-group-delete-modal.component.html',
  styleUrls: ['./evaluation-group-delete-modal.component.css']
})
export class EvaluationGroupDeleteModalComponent implements OnInit, HasteCallback<EvaluationGroup> {

  private isBtnDisabled = false;
  private evaluationGroup: EvaluationGroup;

  @Output()
  private emitter = new EventEmitter<EvaluationGroup>();

  constructor(private evaluationGroupService: EvaluationGroupService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.deleteEvaluationGroupObservable.subscribe((group: EvaluationGroup) => this.evaluationGroup = group);
  }

  public deleteEvaluationGroup(): void {
    this.isBtnDisabled = true;
    this.evaluationGroupService.deleteEvaluationGroup(this.evaluationGroup, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(group: EvaluationGroup): void {
    this.emitter.emit(this.evaluationGroup);
    this.promptService.pushSuccess('删除成功');
    this.modalService.dismissDeleteEvaluationGroupModal();
    this.isBtnDisabled = false;
  }
}
