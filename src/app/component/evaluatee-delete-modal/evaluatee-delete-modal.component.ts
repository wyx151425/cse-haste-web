import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HasteCallback} from '../../model/util/haste-callback';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {Evaluatee} from '../../model/evaluatee';
import {EvaluateeService} from '../../service/evaluatee.service';

@Component({
  selector: 'app-evaluatee-delete-modal',
  templateUrl: './evaluatee-delete-modal.component.html',
  styleUrls: ['./evaluatee-delete-modal.component.css']
})
export class EvaluateeDeleteModalComponent implements OnInit, HasteCallback<Evaluatee> {

  private isBtnDisabled = false;
  private evaluatee: Evaluatee;

  @Output()
  private emitter = new EventEmitter<Evaluatee>();

  constructor(private evaluateeService: EvaluateeService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.deleteEvaluateeObservable.subscribe((evaluatee: Evaluatee) => this.evaluatee = evaluatee);
  }

  public deleteEvaluatee(): void {
    this.isBtnDisabled = true;
    this.evaluateeService.deleteEvaluatee(this.evaluatee, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(evaluatee: Evaluatee): void {
    this.emitter.emit(this.evaluatee);
    this.promptService.pushSuccess('删除成功');
    this.modalService.dismissDeleteEvaluateeModal();
    this.isBtnDisabled = false;
  }
}
