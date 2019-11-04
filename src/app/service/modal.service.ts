import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {EvaluationPlan} from '../model/evaluation-plan';
import {EvaluationGroup} from '../model/evaluation-group';
import {User} from '../model/user';
import {Evaluatee} from '../model/evaluatee';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isHeaderComponentVisible = true;
  public isFooterComponentVisible = true;

  public isCreateEvaluationPlanModalVisible = false;
  public isDeleteEvaluationPlanModalVisible = false;
  public isStartEvaluationPlanModalVisible = false;
  public isSubmitEvaluationPlanModalVisible = false;
  public isCreateEvaluationGroupModalVisible = false;
  public isDeleteEvaluationGroupModalVisible = false;
  public isAddEvaluateeModalVisible = false;
  public isDeleteEvaluateeModalVisible = false;
  public isAddEvaluatorModalVisible = false;
  public isDeleteEvaluatorModalVisible = false;
  public isExportEvaluationScoreFormsModalVisible = false;

  private deleteEvaluationPlanSource = new Subject();
  public deleteEvaluationPlanObservable = this.deleteEvaluationPlanSource.asObservable();

  private startEvaluationPlanSource = new Subject();
  public startEvaluationPlanObservable = this.startEvaluationPlanSource.asObservable();

  private submitEvaluationPlanSource = new Subject();
  public submitEvaluationPlanObservable = this.submitEvaluationPlanSource.asObservable();

  private createEvaluationGroupSource = new Subject();
  public createEvaluationGroupObservable = this.createEvaluationGroupSource.asObservable();

  private deleteEvaluationGroupSource = new Subject();
  public deleteEvaluationGroupObservable = this.deleteEvaluationGroupSource.asObservable();

  private addEvaluateeSource = new Subject();
  public addEvaluateeObservable = this.addEvaluateeSource.asObservable();

  private deleteEvaluateeSource = new Subject();
  public deleteEvaluateeObservable = this.deleteEvaluateeSource.asObservable();

  private addEvaluatorSource = new Subject();
  public addEvaluatorObservable = this.addEvaluatorSource.asObservable();

  private deleteEvaluatorSource = new Subject();
  public deleteEvaluatorObservable = this.deleteEvaluatorSource.asObservable();

  private exportEvaluationScoreFormsSource = new Subject();
  public exportEvaluationScoreFormsObservable = this.exportEvaluationScoreFormsSource.asObservable();

  constructor() {
  }

  public showHeaderComponent(): void {
    this.isHeaderComponentVisible = true;
  }

  public dismissHeaderComponent(): void {
    this.isHeaderComponentVisible = false;
  }

  public showFooterComponent(): void {
    this.isFooterComponentVisible = true;
  }

  public dismissFooterComponent(): void {
    this.isFooterComponentVisible = false;
  }

  public showCreateEvaluationPlanModal(): void {
    this.isCreateEvaluationPlanModalVisible = true;
  }

  public dismissCreateEvaluationPlanModal(): void {
    this.isCreateEvaluationPlanModalVisible = false;
  }

  public showDeleteEvaluationPlanModal(plan: EvaluationPlan): void {
    this.deleteEvaluationPlanSource.next(plan);
    this.isDeleteEvaluationPlanModalVisible = true;
  }

  public dismissDeleteEvaluationPlanModal(): void {
    this.isDeleteEvaluationPlanModalVisible = false;
  }

  public showStartEvaluationPlanModal(plan: EvaluationPlan): void {
    this.startEvaluationPlanSource.next(plan);
    this.isStartEvaluationPlanModalVisible = true;
  }

  public dismissStartEvaluationPlanModal(): void {
    this.isStartEvaluationPlanModalVisible = false;
  }

  public showSubmitEvaluationPlanModal(plan: EvaluationPlan): void {
    this.submitEvaluationPlanSource.next(plan);
    this.isSubmitEvaluationPlanModalVisible = true;
  }

  public dismissSubmitEvaluationPlanModal(): void {
    this.isSubmitEvaluationPlanModalVisible = false;
  }

  public showCreateEvaluationGroupModal(plan: EvaluationPlan): void {
    this.createEvaluationGroupSource.next(plan);
    this.isCreateEvaluationGroupModalVisible = true;
  }

  public dismissCreateEvaluationGroupModal(): void {
    this.isCreateEvaluationGroupModalVisible = false;
  }

  public showDeleteEvaluationGroupModal(group: EvaluationGroup): void {
    this.deleteEvaluationGroupSource.next(group);
    this.isDeleteEvaluationGroupModalVisible = true;
  }

  public dismissDeleteEvaluationGroupModal(): void {
    this.isDeleteEvaluationGroupModalVisible = false;
  }

  public showAddEvaluateeModal(plan: EvaluationPlan): void {
    this.addEvaluateeSource.next(plan);
    this.isAddEvaluateeModalVisible = true;
  }

  public dismissAddEvaluateeModal(): void {
    this.isAddEvaluateeModalVisible = false;
  }

  public showDeleteEvaluateeModal(candidate: Evaluatee): void {
    this.deleteEvaluateeSource.next(candidate);
    this.isDeleteEvaluateeModalVisible = true;
  }

  public dismissDeleteEvaluateeModal(): void {
    this.isDeleteEvaluateeModalVisible = false;
  }

  public showAddEvaluatorModal(plan: EvaluationPlan): void {
    this.addEvaluatorSource.next(plan);
    this.isAddEvaluatorModalVisible = true;
  }

  public dismissAddEvaluatorModal(): void {
    this.isAddEvaluatorModalVisible = false;
  }

  public showDeleteEvaluatorModal(judge: User): void {
    this.deleteEvaluatorSource.next(judge);
    this.isDeleteEvaluatorModalVisible = true;
  }

  public dismissDeleteEvaluatorModal(): void {
    this.isDeleteEvaluatorModalVisible = false;
  }

  public showExportEvaluationScoreFormsModal(plan: EvaluationPlan): void {
    this.exportEvaluationScoreFormsSource.next(plan);
    this.isExportEvaluationScoreFormsModalVisible = true;
  }

  public dismissExportEvaluationScoreFormsModal(): void {
    this.isExportEvaluationScoreFormsModalVisible = false;
  }
}
