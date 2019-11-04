import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {Response} from '../../model/dto/response';
import {EvaluationGroup} from '../../model/evaluation-group';
import {HasteService} from '../../model/util/haste-service';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-aries-judge-manage',
  templateUrl: './aries-judges-manage.component.html',
  styleUrls: ['./aries-judges-manage.component.css']
})
export class AriesJudgesManageComponent implements OnInit, HasteCallback<Array<User>> {

  private planId: number;
  private groupId: number;
  private judges: Array<User>;
  private toNoGroupIds: Array<number>;
  private toGroupIds: Array<number>;

  private isBtnDisabled = false;

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private promptService: PromptService,
    private route: ActivatedRoute) {
    this.toNoGroupIds = [];
    this.toGroupIds = [];
  }

  ngOnInit() {
    this.planId = this.route.snapshot.params['planId'];
    this.groupId = this.route.snapshot.params['groupId'];
    this.route.data.subscribe((data: { response: Response<EvaluationPlan> }) => {
      if (200 === data.response.statusCode) {
        this.judges = data.response.data.judgeList;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public noGroupCheckboxChange(event: any): void {
    const target = event.target;
    if (target.checked) {
      this.toGroupIds.push(target.value);
    } else {
      const index = this.toGroupIds.indexOf(target.value);
      this.toGroupIds.splice(index, 1);
    }
  }

  public groupCheckboxChange(event: any): void {
    const target = event.target;
    if (target.checked) {
      this.toNoGroupIds.push(target.value);
    } else {
      const index = this.toNoGroupIds.indexOf(target.value);
      this.toNoGroupIds.splice(index, 1);
    }
  }

  public pushJudgeToGroup(): void {
    for (const id of this.toGroupIds) {
      for (const judge of this.judges) {
        if (judge.id == id) {
          const group = new EvaluationGroup();
          group.id = this.groupId;
          judge.group = group;
          judge.groupId = this.groupId;
        }
      }
    }
    this.toGroupIds = [];
  }

  public removeGroupJudge(): void {
    for (const id of this.toNoGroupIds) {
      for (const judge of this.judges) {
        if (judge.id == id) {
          judge.group = null;
          judge.groupId = null;
        }
      }
    }
    this.toNoGroupIds = [];
  }

  public saveJudgesGroup(): void {
    this.isBtnDisabled = true;
    this.userService.updateJudgesGroup(this.judges, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(judgs: Array<User>): void {
    this.promptService.pushSuccess('保存成功');
    this.isBtnDisabled = false;
  }

}
