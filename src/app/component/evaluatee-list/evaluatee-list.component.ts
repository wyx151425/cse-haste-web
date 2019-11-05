import {Component, OnInit} from '@angular/core';
import {Evaluatee} from '../../model/evaluatee';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {ActivatedRoute} from '@angular/router';
import {HasteService} from '../../model/util/haste-service';
import {Response} from '../../model/dto/response';
import {EvaluationGroup} from '../../model/evaluation-group';
import {EvaluationGroupService} from '../../service/evaluation-group.service';


@Component({
  selector: 'app-evaluatee-list',
  templateUrl: './evaluatee-list.component.html',
  styleUrls: ['./evaluatee-list.component.css']
})
export class EvaluateeListComponent implements OnInit {

  private evaluationGroup: EvaluationGroup;
  private evaluatees: Array<Evaluatee>;

  constructor(private evaluationGroupService: EvaluationGroupService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
    this.evaluationGroup = new EvaluationGroup();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Array<Evaluatee>> }) => {
      if (200 === data.response.statusCode) {
        this.evaluatees = data.response.data;
        const evaluationGroupId: number = Number(this.route.snapshot.paramMap.get('evaluationGroupId'));
        this.evaluationGroupService.getEvaluationGroupById(evaluationGroupId, null).subscribe(response => {
          if (200 === response.statusCode) {
            this.evaluationGroup = response.data;
          }
        });
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public getNewEvaluatee(evaluatees: Array<Evaluatee>): void {
    for (const evaluatee of evaluatees) {
      this.evaluatees.push(evaluatee);
    }
  }

  public deleteEvaluatee(evaluatee: Evaluatee): void {
    const index = this.evaluatees.indexOf(evaluatee);
    this.evaluatees.splice(index, 1);
  }
}
