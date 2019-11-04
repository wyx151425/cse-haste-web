import {Component, OnInit} from '@angular/core';
import {EvaluationGroup} from '../../model/evaluation-group';
import {ActivatedRoute} from '@angular/router';
import {Response} from '../../model/dto/response';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {HasteService} from '../../model/util/haste-service';
import {ProfessionalScoreFormService} from '../../service/professional-score-form.service';
import {HasteCallback} from '../../model/util/haste-callback';
import {ProfessionalScoreForm} from '../../model/professional-score-form';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-aries-score-submit',
  templateUrl: './aries-score-submit.component.html',
  styleUrls: ['./aries-score-submit.component.css']
})
export class AriesScoreSubmitComponent implements OnInit, HasteCallback<ProfessionalScoreForm> {

  private judge: User;
  private group: EvaluationGroup;
  private isBtnDisabled = false;

  constructor(
    private userService: UserService,
    private scoreService: ProfessionalScoreFormService,
    private modalService: ModalService,
    private promptService: PromptService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.judge = this.userService.getLocalUser();
    this.route.data.subscribe((data: { response: Response<EvaluationGroup> }) => {
      if (200 === data.response.statusCode) {
        this.group = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public submitScore(): void {
    for (const candidate of this.group.candidateList) {
      if (null == candidate.score.professionalKnowledgeScore
        || null == candidate.score.workPerformanceScore
        || null == candidate.score.workAbilityScore
        || null == candidate.score.technicalAbilityScore
        || null == candidate.score.professionalEthicsScore) {
        this.promptService.pushError('提交失败，未完成评分工作');
        return;
      }
    }
    this.isBtnDisabled = true;
    this.scoreService.submitScore(this.judge.id, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(object: ProfessionalScoreForm): void {
    for (const candidate of this.group.candidateList) {
      candidate.score.submit = true;
    }
    this.promptService.pushSuccess('提交成功');
    this.isBtnDisabled = false;
  }
}
