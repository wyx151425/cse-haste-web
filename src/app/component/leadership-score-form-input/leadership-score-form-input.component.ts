import { Component, OnInit } from '@angular/core';
import {EvaluatorService} from '../../service/evaluator.service';
import {Response} from '../../model/dto/response';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {ModalService} from '../../service/modal.service';
import {Evaluator} from '../../model/evaluator';
import {LeadershipScoreForm} from '../../model/leadership-score-form';
import {LeadershipScoreFormService} from '../../service/leadership-score-form.service';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-leadership-score-form-input',
  templateUrl: './leadership-score-form-input.component.html',
  styleUrls: ['./leadership-score-form-input.component.css']
})
export class LeadershipScoreFormInputComponent implements OnInit, HasteCallback<LeadershipScoreForm> {

  private isSaveBtnDisabled = false;
  private isSubmitBtnDisabled = false;

  private evaluator: Evaluator;
  private leadershipScoreForm: LeadershipScoreForm;

  constructor(private evaluatorService: EvaluatorService, private leadershipScoreFormService: LeadershipScoreFormService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<LeadershipScoreForm> }) => {
      if (200 === data.response.statusCode) {
        this.leadershipScoreForm = data.response.data;
        this.evaluatorService.getEvaluatorById(this.leadershipScoreForm.evaluatorId, null).subscribe(response => {
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
    if (null === this.leadershipScoreForm.politicsPerformance1) {
      this.promptService.pushError('请对政治忠诚进行评分');
      return false;
    }
    if (this.leadershipScoreForm.politicsPerformance1 < 1 || this.leadershipScoreForm.politicsPerformance1 > 10) {
      this.promptService.pushError('政治忠诚分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.politicsPerformance2) {
      this.promptService.pushError('请对政治定力进行评分');
      return false;
    }
    if (this.leadershipScoreForm.politicsPerformance2 < 1 || this.leadershipScoreForm.politicsPerformance2 > 10) {
      this.promptService.pushError('政治定力分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.politicsPerformance3) {
      this.promptService.pushError('请对政治担当进行评分');
      return false;
    }
    if (this.leadershipScoreForm.politicsPerformance3 < 1 || this.leadershipScoreForm.politicsPerformance3 > 10) {
      this.promptService.pushError('政治担当分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.politicsPerformance4) {
      this.promptService.pushError('请对政治能力进行评分');
      return false;
    }
    if (this.leadershipScoreForm.politicsPerformance4 < 1 || this.leadershipScoreForm.politicsPerformance4 > 10) {
      this.promptService.pushError('政治能力分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.politicsPerformance5) {
      this.promptService.pushError('请对政治自律进行评分');
      return false;
    }
    if (this.leadershipScoreForm.politicsPerformance5 < 1 || this.leadershipScoreForm.politicsPerformance5 > 10) {
      this.promptService.pushError('政治自律分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.abilityAndQuality1) {
      this.promptService.pushError('请对推动执行能力进行评分');
      return false;
    }
    if (this.leadershipScoreForm.abilityAndQuality1 < 1 || this.leadershipScoreForm.abilityAndQuality1 > 10) {
      this.promptService.pushError('推动执行能力分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.abilityAndQuality2) {
      this.promptService.pushError('请对学习创新能力进行评分');
      return false;
    }
    if (this.leadershipScoreForm.abilityAndQuality2 < 1 || this.leadershipScoreForm.abilityAndQuality2 > 10) {
      this.promptService.pushError('学习创新能力分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.abilityAndQuality3) {
      this.promptService.pushError('请对团队建设能力进行评分');
      return false;
    }
    if (this.leadershipScoreForm.abilityAndQuality3 < 1 || this.leadershipScoreForm.abilityAndQuality3 > 10) {
      this.promptService.pushError('团队建设能力分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.abilityAndQuality4) {
      this.promptService.pushError('请对职业操守进行评分');
      return false;
    }
    if (this.leadershipScoreForm.abilityAndQuality4 < 1 || this.leadershipScoreForm.abilityAndQuality4 > 10) {
      this.promptService.pushError('职业操守分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.workPerformance1) {
      this.promptService.pushError('请对履职绩效进行评分');
      return false;
    }
    if (this.leadershipScoreForm.workPerformance1 < 1 || this.leadershipScoreForm.workPerformance1 > 10) {
      this.promptService.pushError('履职绩效分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.workPerformance2) {
      this.promptService.pushError('请对协同成效进行评分');
      return false;
    }
    if (this.leadershipScoreForm.workPerformance2 < 1 || this.leadershipScoreForm.workPerformance2 > 10) {
      this.promptService.pushError('协同成效分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.integrity1) {
      this.promptService.pushError('请对作风建设进行评分');
      return false;
    }
    if (this.leadershipScoreForm.integrity1 < 1 || this.leadershipScoreForm.integrity1 > 10) {
      this.promptService.pushError('作风建设分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.integrity2) {
      this.promptService.pushError('请对廉洁自律进行评分');
      return false;
    }
    if (this.leadershipScoreForm.integrity2 < 1 || this.leadershipScoreForm.integrity2 > 10) {
      this.promptService.pushError('廉洁自律分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.integrity3) {
      this.promptService.pushError('请对一岗双责进行评分');
      return false;
    }
    if (this.leadershipScoreForm.integrity3 < 1 || this.leadershipScoreForm.integrity3 > 10) {
      this.promptService.pushError('一岗双责分数应在1~10分之间');
      return false;
    }
    return true;
  }

  public saveLeadershipScoreFormScore(): void {
    if (this.checkParamsValidity()) {
      this.isSaveBtnDisabled = true;
      this.leadershipScoreFormService.updateLeadershipScoreForm(this.leadershipScoreForm, this).subscribe();
    }
  }

  public submitLeadershipScoreFormScore(): void {
    if (this.checkParamsValidity()) {
      this.isSubmitBtnDisabled = true;
      this.leadershipScoreFormService.submitLeadershipScoreForm(this.leadershipScoreForm, this).subscribe();
    }
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isSaveBtnDisabled = false;
    this.isSubmitBtnDisabled = false;
  }

  onSuccess(object: LeadershipScoreForm): void {
    if (null !== object) {
      this.leadershipScoreForm = object;
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
