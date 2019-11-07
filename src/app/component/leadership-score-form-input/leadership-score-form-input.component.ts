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
    this.evaluator = new Evaluator();
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
    if (null === this.leadershipScoreForm.politicsQuality1) {
      this.promptService.pushError('请对政治方向进行评分');
      return false;
    }
    if (this.leadershipScoreForm.politicsQuality1 < 1 || this.leadershipScoreForm.politicsQuality1 > 10) {
      this.promptService.pushError('政治方向分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.politicsQuality2) {
      this.promptService.pushError('请对党建工作进行评分');
      return false;
    }
    if (this.leadershipScoreForm.politicsQuality2 < 1 || this.leadershipScoreForm.politicsQuality2 > 10) {
      this.promptService.pushError('党建工作分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.politicsQuality3) {
      this.promptService.pushError('请对社会责任进行评分');
      return false;
    }
    if (this.leadershipScoreForm.politicsQuality3 < 1 || this.leadershipScoreForm.politicsQuality3 > 10) {
      this.promptService.pushError('社会责任分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.operatePerformance1) {
      this.promptService.pushError('请对经济效益进行评分');
      return false;
    }
    if (this.leadershipScoreForm.operatePerformance1 < 1 || this.leadershipScoreForm.operatePerformance1 > 10) {
      this.promptService.pushError('经济效益分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.operatePerformance2) {
      this.promptService.pushError('请对可持续发展进行评分');
      return false;
    }
    if (this.leadershipScoreForm.operatePerformance2 < 1 || this.leadershipScoreForm.operatePerformance2 > 10) {
      this.promptService.pushError('可持续发展分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.operatePerformance3) {
      this.promptService.pushError('请对创新成效进行评分');
      return false;
    }
    if (this.leadershipScoreForm.operatePerformance3 < 1 || this.leadershipScoreForm.operatePerformance3 > 10) {
      this.promptService.pushError('创新成效分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.operatePerformance4) {
      this.promptService.pushError('请对科学管理进行评分');
      return false;
    }
    if (this.leadershipScoreForm.operatePerformance4 < 1 || this.leadershipScoreForm.operatePerformance4 > 10) {
      this.promptService.pushError('科学管理分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.teamwork1) {
      this.promptService.pushError('请对发扬民主进行评分');
      return false;
    }
    if (this.leadershipScoreForm.teamwork1 < 1 || this.leadershipScoreForm.teamwork1 > 10) {
      this.promptService.pushError('发扬民主分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.teamwork2) {
      this.promptService.pushError('请对整体合力进行评分');
      return false;
    }
    if (this.leadershipScoreForm.teamwork2 < 1 || this.leadershipScoreForm.teamwork2 > 10) {
      this.promptService.pushError('整体合力分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.teamwork3) {
      this.promptService.pushError('请对运行机制进行评分');
      return false;
    }
    if (this.leadershipScoreForm.teamwork3 < 1 || this.leadershipScoreForm.teamwork3 > 10) {
      this.promptService.pushError('运行机制分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.styleAndImage1) {
      this.promptService.pushError('请对联系群众进行评分');
      return false;
    }
    if (this.leadershipScoreForm.styleAndImage1 < 1 || this.leadershipScoreForm.styleAndImage1 > 10) {
      this.promptService.pushError('联系群众分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.styleAndImage2) {
      this.promptService.pushError('请对选人用人进行评分');
      return false;
    }
    if (this.leadershipScoreForm.styleAndImage2 < 1 || this.leadershipScoreForm.styleAndImage2 > 10) {
      this.promptService.pushError('选人用人分数应在1~10分之间');
      return false;
    }
    if (null === this.leadershipScoreForm.styleAndImage3) {
      this.promptService.pushError('请对廉洁自律进行评分');
      return false;
    }
    if (this.leadershipScoreForm.styleAndImage3 < 1 || this.leadershipScoreForm.styleAndImage3 > 10) {
      this.promptService.pushError('廉洁自律分数应在1~10分之间');
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
