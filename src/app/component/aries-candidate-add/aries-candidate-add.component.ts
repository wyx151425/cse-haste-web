import {Component, OnInit} from '@angular/core';
import {Evaluatee} from '../../model/evaluatee';
import {ModalService} from '../../service/modal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {EvaluateeService} from '../../service/evaluatee.service';
import {getFileNativeUrl} from '../../app.component';
import {HasteCallback} from '../../model/util/haste-callback';
import {HasteService} from '../../model/util/haste-service';
import {Response} from '../../model/dto/response';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {User} from '../../model/user';

@Component({
  selector: 'app-aries-candidate-add',
  templateUrl: './aries-candidate-add.component.html',
  styleUrls: ['./aries-candidate-add.component.css']
})
export class AriesCandidateAddComponent implements OnInit, HasteCallback<Evaluatee> {

  private plan: EvaluationPlan;
  private candidate: Evaluatee;
  private user: User;
  private portraitFile: any;
  private isFileSelected = false;
  private defaultPortrait: string;
  private isBtnDisabled = false;

  constructor(private candidateService: EvaluateeService,
              private modalService: ModalService,
              private promptService: PromptService,
              private route: ActivatedRoute,
              private router: Router) {
    this.candidate = new Evaluatee();
    this.user = new User();
    this.candidate.portrait = '../../../assets/images/default.png';
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<EvaluationPlan> }) => {
      if (200 === data.response.statusCode) {
        this.plan = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public selectFile(event: any): void {
    this.portraitFile = event.target;
    this.defaultPortrait = this.candidate.portrait;
    this.candidate.portrait = getFileNativeUrl(event.target.files[0]);
    this.isFileSelected = true;
  }

  public deselectFile(): void {
    this.portraitFile.value = '';
    this.candidate.portrait = this.defaultPortrait;
    this.isFileSelected = false;
  }

  public saveCandidatePortrait(): void {
    if (!this.isFileSelected) {
      this.promptService.pushWarning('请选择图片文件');
      return;
    }
    this.isBtnDisabled = true;
    const param = new FormData();
    param.append('file', this.portraitFile.files[0], this.portraitFile.files[0].name);
    this.candidateService.saveCandidatePortrait(param, null).subscribe((response: Response<string>) => {
      if (200 === response.statusCode) {
        this.promptService.pushSuccess('保存成功');
        this.candidate.portrait = response.data;
        this.portraitFile.value = '';
        this.isFileSelected = false;
      } else {
        this.promptService.pushError(HasteService.getMessage(response.statusCode));
      }
      this.isBtnDisabled = false;
    });
  }

  public saveCandidateInfo(): void {
    if (null == this.candidate.name || '' === this.candidate.name) {
      this.promptService.pushWarning('请填写姓名');
      return;
    }
    if (null == this.user.username || '' === this.user.username) {
      this.promptService.pushWarning('请填写用户名');
      return;
    }
    if (null == this.user.password || '' === this.user.password) {
      this.promptService.pushWarning('请填写密码');
      return;
    }
    this.isBtnDisabled = true;
    this.user.name = this.candidate.name;
    this.candidate.user = this.user;
    this.candidate.plan = this.plan;
    this.candidateService.saveCandidate(this.candidate, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(candidate: Evaluatee): void {
    this.promptService.pushSuccess('保存成功');
    this.router.navigate(['/plan/' + this.plan.id + '/candidates']);
    this.isBtnDisabled = false;
  }
}
