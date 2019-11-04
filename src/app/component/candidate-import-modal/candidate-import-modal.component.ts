import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {EvaluateeService} from '../../service/evaluatee.service';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {HasteCallback} from '../../model/util/haste-callback';
import {Evaluatee} from '../../model/evaluatee';

@Component({
  selector: 'app-candidate-import-modal',
  templateUrl: './candidate-import-modal.component.html',
  styleUrls: ['./candidate-import-modal.component.css']
})
export class CandidateImportModalComponent implements OnInit, HasteCallback<Array<Evaluatee>> {

  private plan: EvaluationPlan;
  private candidateFile: any;

  private isBtnDisabled = false;

  @Output()
  private emitter = new EventEmitter<Array<Evaluatee>>();

  constructor(
    private candidateService: EvaluateeService,
    private modalService: ModalService,
    private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.addEvaluateeObservable.subscribe((plan: EvaluationPlan) => this.plan = plan);
  }

  public selectFile(event: any): void {
    this.candidateFile = event.target;
  }

  public importFile(): void {
    if (null == this.candidateFile) {
      this.promptService.pushWarning('请选择文件');
      return;
    }
    this.isBtnDisabled = true;
    const param = new FormData();
    param.append('planId', this.plan.id.toString());
    param.append('file', this.candidateFile.files[0], this.candidateFile.files[0].name);
    this.candidateService.importCandidates(param, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(candidates: Array<Evaluatee>): void {
    this.emitter.emit(candidates);
    this.promptService.pushSuccess('导入成功');
    this.modalService.dismissAddEvaluateeModal();
    this.isBtnDisabled = false;
  }
}
