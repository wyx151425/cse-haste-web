import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {EvaluationGroupService} from '../../service/evaluation-group.service';
import {HasteService} from '../../model/util/haste-service';
import {EvaluationGroup} from '../../model/evaluation-group';
import {Response} from '../../model/dto/response';
import {HasteCallback} from '../../model/util/haste-callback';
import {ModalService} from '../../service/modal.service';
import {User} from '../../model/user';
import {Evaluatee} from '../../model/evaluatee';
import {EvaluateeService} from '../../service/evaluatee.service';

@Component({
  selector: 'app-evaluatee-select-list',
  templateUrl: './evaluation-group-evaluatee-select.component.html',
  styleUrls: ['./evaluation-group-evaluatee-select.component.css']
})
export class EvaluationGroupEvaluateeSelectComponent implements OnInit, HasteCallback<Evaluatee> {

  private queryName = '';
  private evaluationGroup: EvaluationGroup;
  private users: Array<User>;

  constructor(private evaluationGroupService: EvaluationGroupService, private evaluateeService: EvaluateeService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
    this.evaluationGroup = new EvaluationGroup();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Array<User>> }) => {
      if (200 === data.response.statusCode) {
        this.users = data.response.data;
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

  public addEvaluatee(user: User): void {
    const evaluatee = new Evaluatee();
    evaluatee.user = user;
    evaluatee.evaluationGroup = this.evaluationGroup;
    this.evaluateeService.addEvaluatee(evaluatee, this).subscribe();
  }

  public deleteEvaluatee(evaluatee: Evaluatee): void {
    for (const user of this.users) {
      if (evaluatee.userId === user.id) {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        break;
      }
    }
  }

  public queryEvaluatees(): void {
    this.evaluateeService.getNotSelectEvaluateesByEvaluationGroupAndName(this.evaluationGroup.id, this.queryName, null).subscribe(response => {
      if (200 === response.statusCode) {
        this.users = response.data;
      }
    });
  }

  onError(message: string): void {
    this.promptService.pushError(message);
  }

  onSuccess(evaluatee: Evaluatee): void {
    this.deleteEvaluatee(evaluatee);
    this.promptService.pushSuccess('添加成功');
  }
}
