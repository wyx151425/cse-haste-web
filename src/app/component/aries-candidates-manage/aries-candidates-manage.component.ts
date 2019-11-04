import {Component, OnInit} from '@angular/core';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {Response} from '../../model/dto/response';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {ModalService} from '../../service/modal.service';
import {Evaluatee} from '../../model/evaluatee';
import {EvaluationGroup} from '../../model/evaluation-group';
import {EvaluateeService} from '../../service/evaluatee.service';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-aries-candidate-manage',
  templateUrl: './aries-candidates-manage.component.html',
  styleUrls: ['./aries-candidates-manage.component.css']
})
export class AriesCandidatesManageComponent implements OnInit, HasteCallback<Array<Evaluatee>> {

  private planId: number;
  private groupId: number;
  private candidates: Array<Evaluatee>;
  private toNoGroupIds: Array<number>;
  private toGroupIds: Array<number>;

  private isBtnDisabled = false;

  constructor(
    private candidateService: EvaluateeService,
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
        this.candidates = data.response.data.candidateList;
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

  public pushCandidateToGroup(): void {
    for (const id of this.toGroupIds) {
      for (const candidate of this.candidates) {
        if (candidate.id == id) {
          const group = new EvaluationGroup();
          group.id = this.groupId;
          candidate.group = group;
          candidate.groupId = this.groupId;
        }
      }
    }
    this.toGroupIds = [];
  }

  public removeGroupCandidate(): void {
    for (const id of this.toNoGroupIds) {
      for (const candidate of this.candidates) {
        if (candidate.id == id) {
          candidate.group = null;
          candidate.groupId = null;
        }
      }
    }
    this.toNoGroupIds = [];
  }

  public saveCandidatesGroup(): void {
    this.isBtnDisabled = true;
    this.candidateService.updateCandidatesGroup(this.candidates, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(candidates: Array<Evaluatee>): void {
    this.promptService.pushSuccess('保存成功');
    this.isBtnDisabled = false;
  }
}
