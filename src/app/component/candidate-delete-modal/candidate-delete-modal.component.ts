import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Evaluatee} from '../../model/evaluatee';
import {EvaluateeService} from '../../service/evaluatee.service';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-candidate-delete-modal',
  templateUrl: './candidate-delete-modal.component.html',
  styleUrls: ['./candidate-delete-modal.component.css']
})
export class CandidateDeleteModalComponent implements OnInit, HasteCallback<Evaluatee> {

  private candidate: Evaluatee;
  private isBtnDisabled = false;

  @Output()
  private emitter = new EventEmitter<Evaluatee>();

  constructor(
    private candidateService: EvaluateeService,
    private modalService: ModalService,
    private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.deleteEvaluateeObservable.subscribe((candidate: Evaluatee) => this.candidate = candidate);
  }

  public deleteCandidate(): void {
    this.isBtnDisabled = true;
    this.candidateService.deleteCandidate(this.candidate, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(candidate: Evaluatee): void {
    this.emitter.emit(this.candidate);
    this.promptService.pushSuccess('删除成功');
    this.modalService.dismissDeleteEvaluateeModal();
    this.isBtnDisabled = false;
  }
}
