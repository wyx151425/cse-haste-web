import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {EvaluationGroupService} from '../../service/evaluation-group.service';
import {HasteService} from '../../model/util/haste-service';
import {EvaluationGroup} from '../../model/evaluation-group';
import {Response} from '../../model/dto/response';
import {ModalService} from '../../service/modal.service';
import {User} from '../../model/user';
import {EvaluatorService} from '../../service/evaluator.service';
import {Evaluator} from '../../model/evaluator';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-evaluator-select-list',
  templateUrl: './evaluator-select-list.component.html',
  styleUrls: ['./evaluator-select-list.component.css']
})
export class EvaluatorSelectListComponent implements OnInit, HasteCallback<Evaluator> {

  private evaluationGroup: EvaluationGroup;
  private users: Array<User>;

  constructor(private evaluationGroupService: EvaluationGroupService, private evaluatorService: EvaluatorService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
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

  public addEvaluator(user: User): void {
    const evaluator = new Evaluator();
    evaluator.user = user;
    evaluator.evaluationGroup = this.evaluationGroup;
    this.evaluatorService.addEvaluator(evaluator, this).subscribe();
  }

  public deleteEvaluator(evaluator: Evaluator): void {
    const index = this.users.indexOf(evaluator.user);
    this.users.splice(index, 1);
  }

  onError(message: string): void {
    this.promptService.pushError(message);
  }

  onSuccess(evaluator: Evaluator): void {
    this.deleteEvaluator(evaluator);
    this.promptService.pushSuccess('添加成功');
  }
}
