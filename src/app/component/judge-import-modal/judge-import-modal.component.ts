import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {User} from '../../model/user';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {UserService} from '../../service/user.service';
import {Evaluatee} from '../../model/evaluatee';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-judge-import-modal',
  templateUrl: './judge-import-modal.component.html',
  styleUrls: ['./judge-import-modal.component.css']
})
export class JudgeImportModalComponent implements OnInit, HasteCallback<Array<User>> {

  private plan: EvaluationPlan;
  private judgeFile: any;

  private isBtnDisabled = false;

  @Output()
  private emitter = new EventEmitter<Array<User>>();

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private promptService: PromptService) {

  }

  ngOnInit() {
    this.modalService.addEvaluatorObservable.subscribe((plan: EvaluationPlan) => this.plan = plan);
  }

  public selectFile(event: any): void {
    this.judgeFile = event.target;
  }

  public importFile(): void {
    if (null == this.judgeFile) {
      this.promptService.pushWarning('请选择文件');
      return;
    }
    this.isBtnDisabled = true;
    const param = new FormData();
    param.append('planId', this.plan.id.toString());
    param.append('file', this.judgeFile.files[0], this.judgeFile.files[0].name);
    this.userService.importJudges(param, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(judges: Array<User>): void {
    this.emitter.emit(judges);
    this.promptService.pushSuccess('导入成功');
    this.modalService.dismissAddEvaluatorModal();
    this.isBtnDisabled = false;
  }
}
