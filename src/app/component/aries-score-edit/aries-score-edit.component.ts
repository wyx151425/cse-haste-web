import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Response} from '../../model/dto/response';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {HasteService} from '../../model/util/haste-service';
import {ProfessionalScoreForm} from '../../model/professional-score-form';
import {HasteCallback} from '../../model/util/haste-callback';
import {ProfessionalScoreFormService} from '../../service/professional-score-form.service';

@Component({
  selector: 'app-aries-score-edit',
  templateUrl: './aries-score-edit.component.html',
  styleUrls: ['./aries-score-edit.component.css']
})
export class AriesScoreEditComponent implements OnInit, HasteCallback<ProfessionalScoreForm> {

  private score: ProfessionalScoreForm;

  private isBtnDisabled = false;

  constructor(private scoreService: ProfessionalScoreFormService,
              private modalService: ModalService,
              private promptService: PromptService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<ProfessionalScoreForm> }) => {
      if (200 === data.response.statusCode) {
        this.score = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public saveScore(): void {
    if (null == this.score.professionalKnowledgeScore) {
      this.promptService.pushWarning('请对专业知识与技术水平评分');
      return;
    }
    if (null == this.score.workPerformanceScore) {
      this.promptService.pushWarning('请对工作业绩评分');
      return;
    }
    if (null == this.score.workAbilityScore) {
      this.promptService.pushWarning('请对工作能力评分');
      return;
    }
    if (null == this.score.technicalAbilityScore) {
      this.promptService.pushWarning('请对论著与技术总结评分');
      return;
    }
    if (null == this.score.professionalEthicsScore) {
      this.promptService.pushWarning('请对职业道德和工作态度评分');
      return;
    }
    if (this.score.professionalKnowledgeScore < 0 || this.score.professionalKnowledgeScore > 100 ||
      this.score.workPerformanceScore < 0 || this.score.workPerformanceScore > 100 ||
      this.score.workAbilityScore < 0 || this.score.workAbilityScore > 100 ||
      this.score.technicalAbilityScore < 0 || this.score.technicalAbilityScore > 100 ||
      this.score.professionalEthicsScore < 0 || this.score.professionalEthicsScore > 100) {
      this.promptService.pushWarning('评分应在0~100之间');
      return;
    }
    this.isBtnDisabled = true;
    this.scoreService.updateScore(this.score, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(object: ProfessionalScoreForm): void {
    this.promptService.pushSuccess('保存成功');
    this.isBtnDisabled = false;
  }

}
