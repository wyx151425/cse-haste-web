import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {HasteCallback} from '../../model/util/haste-callback';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-judge-delete-modal',
  templateUrl: './judge-delete-modal.component.html',
  styleUrls: ['./judge-delete-modal.component.css']
})
export class JudgeDeleteModalComponent implements OnInit, HasteCallback<User> {

  private judge: User;
  private isBtnDisabled = false;

  @Output()
  private emitter = new EventEmitter<User>();

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.deleteEvaluatorObservable.subscribe((judge: User) => this.judge = judge);
  }

  public deleteJudge(): void {
    this.isBtnDisabled = true;
    this.userService.deleteJudge(this.judge, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(judge: User): void {
    this.emitter.emit(this.judge);
    this.promptService.pushSuccess('删除成功');
    this.modalService.dismissDeleteEvaluatorModal();
    this.isBtnDisabled = false;
  }
}
