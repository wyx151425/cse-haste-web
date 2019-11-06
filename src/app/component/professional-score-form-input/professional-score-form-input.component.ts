import {Component, OnInit} from '@angular/core';
import {EvaluatorService} from '../../service/evaluator.service';
import {Response} from '../../model/dto/response';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {ModalService} from '../../service/modal.service';
import {Evaluator} from '../../model/evaluator';
import {ProfessionalScoreFormService} from '../../service/professional-score-form.service';
import {ProfessionalScoreForm} from '../../model/professional-score-form';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-professional-score-form-input',
  templateUrl: './professional-score-form-input.component.html',
  styleUrls: ['./professional-score-form-input.component.css']
})
export class ProfessionalScoreFormInputComponent implements OnInit, HasteCallback<ProfessionalScoreForm> {

  private isSaveBtnDisabled = false;
  private isSubmitBtnDisabled = false;

  private evaluator: Evaluator;
  private professionalScoreForm: ProfessionalScoreForm;

  constructor(private evaluatorService: EvaluatorService, private professionalScoreFormService: ProfessionalScoreFormService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<ProfessionalScoreForm> }) => {
      if (200 === data.response.statusCode) {
        this.professionalScoreForm = data.response.data;
        this.evaluatorService.getEvaluatorById(this.professionalScoreForm.evaluatorId, null).subscribe(response => {
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
    if (null === this.professionalScoreForm.moral1) {
      this.promptService.pushError('请对价值观进行评分');
      return false;
    }
    if (this.professionalScoreForm.moral1 < 1 || this.professionalScoreForm.moral1 > 8) {
      this.promptService.pushError('价值观分数应在1~8分之间');
      return false;
    }
    if (null === this.professionalScoreForm.moral2) {
      this.promptService.pushError('请对认同感进行评分');
      return false;
    }
    if (this.professionalScoreForm.moral2 < 1 || this.professionalScoreForm.moral2 > 8) {
      this.promptService.pushError('认同感分数应在1~8分之间');
      return false;
    }
    if (null === this.professionalScoreForm.quality1) {
      this.promptService.pushError('请对诚信正直进行评分');
      return false;
    }
    if (this.professionalScoreForm.quality1 < 1 || this.professionalScoreForm.quality1 > 8) {
      this.promptService.pushError('诚信正直分数应在1~8分之间');
      return false;
    }
    if (null === this.professionalScoreForm.quality2) {
      this.promptService.pushError('请对责任心进行评分');
      return false;
    }
    if (this.professionalScoreForm.quality2 < 1 || this.professionalScoreForm.quality2 > 8) {
      this.promptService.pushError('责任心分数应在1~8分之间');
      return false;
    }
    if (null === this.professionalScoreForm.quality3) {
      this.promptService.pushError('请对进取心进行评分');
      return false;
    }
    if (this.professionalScoreForm.quality3 < 1 || this.professionalScoreForm.quality3 > 8) {
      this.promptService.pushError('进取心分数应在1~8分之间');
      return false;
    }
    if (null === this.professionalScoreForm.ability1) {
      this.promptService.pushError('请对团队建设进行评分');
      return false;
    }
    if (this.professionalScoreForm.ability1 < 1 || this.professionalScoreForm.ability1 > 10) {
      this.promptService.pushError('团队建设分数应在1~10分之间');
      return false;
    }
    if (null === this.professionalScoreForm.ability2) {
      this.promptService.pushError('请对高效执行进行评分');
      return false;
    }
    if (this.professionalScoreForm.ability2 < 1 || this.professionalScoreForm.ability2 > 10) {
      this.promptService.pushError('高效执行分数应在1~10分之间');
      return false;
    }
    if (null === this.professionalScoreForm.ability3) {
      this.promptService.pushError('请对学习创新进行评分');
      return false;
    }
    if (this.professionalScoreForm.ability3 < 1 || this.professionalScoreForm.ability3 > 10) {
      this.promptService.pushError('学习创新分数应在1~10分之间');
      return false;
    }
    if (null === this.professionalScoreForm.performance1) {
      this.promptService.pushError('请对履职绩效进行评分');
      return false;
    }
    if (this.professionalScoreForm.performance1 < 1 || this.professionalScoreForm.performance1 > 10) {
      this.promptService.pushError('履职绩效分数应在1~10分之间');
      return false;
    }
    if (null === this.professionalScoreForm.performance2) {
      this.promptService.pushError('请对问题解决进行评分');
      return false;
    }
    if (this.professionalScoreForm.performance2 < 1 || this.professionalScoreForm.performance2 > 10) {
      this.promptService.pushError('问题解决分数应在1~10分之间');
      return false;
    }
    if (null === this.professionalScoreForm.performance3) {
      this.promptService.pushError('请对协调成效进行评分');
      return false;
    }
    if (this.professionalScoreForm.performance3 < 1 || this.professionalScoreForm.performance3 > 10) {
      this.promptService.pushError('协调成效分数应在1~10分之间');
      return false;
    }
    return true;
  }

  public saveProfessionalScoreFormScore(): void {
    if (this.checkParamsValidity()) {
      this.isSaveBtnDisabled = true;
      this.professionalScoreFormService.updateProfessionalScoreForm(this.professionalScoreForm, this).subscribe();
    }
  }

  public submitProfessionalScoreFormScore(): void {
    if (this.checkParamsValidity()) {
      this.isSubmitBtnDisabled = true;
      this.professionalScoreFormService.submitProfessionalScoreForm(this.professionalScoreForm, this).subscribe();
    }
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isSaveBtnDisabled = false;
    this.isSubmitBtnDisabled = false;
  }

  onSuccess(object: ProfessionalScoreForm): void {
    if (null !== object) {
      this.professionalScoreForm = object;
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
