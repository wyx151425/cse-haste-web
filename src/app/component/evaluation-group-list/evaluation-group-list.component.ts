import { Component, OnInit } from '@angular/core';
import {Response} from '../../model/dto/response';
import {ActivatedRoute} from '@angular/router';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {EvaluationGroup} from '../../model/evaluation-group';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';

@Component({
  selector: 'app-evaluation-group-list',
  templateUrl: './evaluation-group-list.component.html',
  styleUrls: ['./evaluation-group-list.component.css']
})
export class EvaluationGroupListComponent implements OnInit {

  private evaluationPlan: EvaluationPlan;
  private evaluationGroups: Array<EvaluationGroup>;

  constructor(private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<EvaluationPlan> }) => {
      if (200 === data.response.statusCode) {
        this.evaluationPlan = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public getNewEvaluationGroup(group: EvaluationGroup): void {
    this.evaluationGroups.push(group);
  }

  public deleteEvaluationGroup(group: EvaluationGroup): void {
    const index = this.evaluationGroups.indexOf(group);
    this.evaluationGroups.splice(index, 1);
  }
}
