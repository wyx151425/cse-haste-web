import { Component, OnInit } from '@angular/core';
import {HasteService} from '../../model/util/haste-service';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {ModalService} from '../../service/modal.service';
import {Response} from '../../model/dto/response';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {Evaluatee} from '../../model/evaluatee';
import {User} from '../../model/user';

@Component({
  selector: 'app-aries-plan-judges',
  templateUrl: './aries-plan-judges.component.html',
  styleUrls: ['./aries-plan-judges.component.css']
})
export class AriesPlanJudgesComponent implements OnInit {

  private plan: EvaluationPlan;

  constructor(
    private modalService: ModalService,
    private promptService: PromptService,
    private route: ActivatedRoute) {
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

  public getNewJudges(judges: Array<User>): void {
    for (const judge of judges) {
      this.plan.judgeList.push(judge);
    }
  }

  public deleteJudge(judge: User): void {
    const index = this.plan.judgeList.indexOf(judge);
    this.plan.judgeList.splice(index, 1);
  }
}
