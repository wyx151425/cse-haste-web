import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HasteCallback} from '../../model/util/haste-callback';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {Evaluator} from '../../model/evaluator';
import {EvaluatorService} from '../../service/evaluator.service';

@Component({
  selector: 'app-evaluator-delete-modal',
  templateUrl: './evaluator-delete-modal.component.html',
  styleUrls: ['./evaluator-delete-modal.component.css']
})
export class EvaluatorDeleteModalComponent implements OnInit, HasteCallback<Evaluator> {

  private isBtnDisabled = false;
  private evaluator: Evaluator;

  @Output()
  private emitter = new EventEmitter<Evaluator>();

  constructor(private evaluatorService: EvaluatorService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.deleteEvaluatorObservable.subscribe((evaluator: Evaluator) => this.evaluator = evaluator);
  }

  public deleteEvaluator(): void {
    this.isBtnDisabled = true;
    this.evaluatorService.deleteEvaluator(this.evaluator, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(evaluator: Evaluator): void {
    this.emitter.emit(this.evaluator);
    this.promptService.pushSuccess('删除成功');
    this.modalService.dismissDeleteEvaluatorModal();
    this.isBtnDisabled = false;
  }
}
