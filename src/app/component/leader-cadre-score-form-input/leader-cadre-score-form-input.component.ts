import {Component, OnInit} from '@angular/core';
import {Response} from '../../model/dto/response';
import {LeaderCadreScoreForm} from '../../model/leader-cadre-score-form';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {ActivatedRoute} from '@angular/router';
import {LeaderCadreScoreFormService} from '../../service/leader-cadre-score-form.service';
import {HasteService} from '../../model/util/haste-service';
import {EvaluatorService} from '../../service/evaluator.service';
import {Evaluator} from '../../model/evaluator';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-leader-cadre-score-form-input',
  templateUrl: './leader-cadre-score-form-input.component.html',
  styleUrls: ['./leader-cadre-score-form-input.component.css']
})
export class LeaderCadreScoreFormInputComponent implements OnInit, HasteCallback<LeaderCadreScoreForm> {

  private isSaveBtnDisabled = false;
  private isSubmitBtnDisabled = false;

  private evaluator: Evaluator;
  private leaderCadreScoreForm: LeaderCadreScoreForm;

  constructor(private evaluatorService: EvaluatorService, private leaderCadreScoreFormService: LeaderCadreScoreFormService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<LeaderCadreScoreForm> }) => {
      if (200 === data.response.statusCode) {
        this.leaderCadreScoreForm = data.response.data;
        this.evaluatorService.getEvaluatorById(this.leaderCadreScoreForm.evaluatorId, null).subscribe(response => {
          if (200 === response.statusCode) {
            this.evaluator = response.data;
          }
        });
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  private checkParamsValidity(): boolean {
    if (null === this.leaderCadreScoreForm.politicsPerformance1) {
      this.promptService.pushError('请对政治忠诚进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.politicsPerformance1 < 1 || this.leaderCadreScoreForm.politicsPerformance1 > 10) {
      this.promptService.pushError('政治忠诚分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.politicsPerformance2) {
      this.promptService.pushError('请对政治定力进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.politicsPerformance2 < 1 || this.leaderCadreScoreForm.politicsPerformance2 > 10) {
      this.promptService.pushError('政治定力分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.politicsPerformance3) {
      this.promptService.pushError('请对政治担当进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.politicsPerformance3 < 1 || this.leaderCadreScoreForm.politicsPerformance3 > 10) {
      this.promptService.pushError('政治担当分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.politicsPerformance4) {
      this.promptService.pushError('请对政治能力进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.politicsPerformance4 < 1 || this.leaderCadreScoreForm.politicsPerformance4 > 10) {
      this.promptService.pushError('政治能力分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.politicsPerformance5) {
      this.promptService.pushError('请对政治自律进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.politicsPerformance5 < 1 || this.leaderCadreScoreForm.politicsPerformance5 > 10) {
      this.promptService.pushError('政治自律分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.abilityAndQuality1) {
      this.promptService.pushError('请对推动执行能力进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.abilityAndQuality1 < 1 || this.leaderCadreScoreForm.abilityAndQuality1 > 10) {
      this.promptService.pushError('推动执行能力分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.abilityAndQuality2) {
      this.promptService.pushError('请对学习创新能力进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.abilityAndQuality2 < 1 || this.leaderCadreScoreForm.abilityAndQuality2 > 10) {
      this.promptService.pushError('学习创新能力分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.abilityAndQuality3) {
      this.promptService.pushError('请对团队建设能力进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.abilityAndQuality3 < 1 || this.leaderCadreScoreForm.abilityAndQuality3 > 10) {
      this.promptService.pushError('团队建设能力分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.abilityAndQuality4) {
      this.promptService.pushError('请对职业操守进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.abilityAndQuality4 < 1 || this.leaderCadreScoreForm.abilityAndQuality4 > 10) {
      this.promptService.pushError('职业操守分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.workPerformance1) {
      this.promptService.pushError('请对履职绩效进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.workPerformance1 < 1 || this.leaderCadreScoreForm.workPerformance1 > 10) {
      this.promptService.pushError('履职绩效分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.workPerformance2) {
      this.promptService.pushError('请对协同成效进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.workPerformance2 < 1 || this.leaderCadreScoreForm.workPerformance2 > 10) {
      this.promptService.pushError('协同成效分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.integrity1) {
      this.promptService.pushError('请对作风建设进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.integrity1 < 1 || this.leaderCadreScoreForm.integrity1 > 10) {
      this.promptService.pushError('作风建设分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.integrity2) {
      this.promptService.pushError('请对廉洁自律进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.integrity2 < 1 || this.leaderCadreScoreForm.integrity2 > 10) {
      this.promptService.pushError('廉洁自律分数应在1~10分之间');
      return false;
    }
    if (null === this.leaderCadreScoreForm.integrity3) {
      this.promptService.pushError('请对一岗双责进行评分');
      return false;
    }
    if (this.leaderCadreScoreForm.integrity3 < 1 || this.leaderCadreScoreForm.integrity3 > 10) {
      this.promptService.pushError('一岗双责分数应在1~10分之间');
      return false;
    }
    return true;
  }

  public saveLeaderCadreScoreFormScore(): void {
    if (this.checkParamsValidity()) {
      this.isSaveBtnDisabled = true;
      this.leaderCadreScoreFormService.updateLeaderCadreScoreForm(this.leaderCadreScoreForm, this).subscribe();
    }
  }

  public submitLeaderCadreScoreFormScore(): void {
    if (this.checkParamsValidity()) {
      this.isSubmitBtnDisabled = true;
      this.leaderCadreScoreFormService.submitLeaderCadreScoreForm(this.leaderCadreScoreForm, this).subscribe();
    }
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isSaveBtnDisabled = false;
    this.isSubmitBtnDisabled = false;
  }

  onSuccess(object: LeaderCadreScoreForm): void {
    if (null !== object) {
      this.leaderCadreScoreForm = object;
    }
    if (this.isSaveBtnDisabled) {
      this.promptService.pushSuccess('保存成功');
      this.isSaveBtnDisabled = false;
    }
    if (this.isSubmitBtnDisabled) {
      this.promptService.pushSuccess('提交成功');
      this.isSubmitBtnDisabled = false;
    }
  }
}
