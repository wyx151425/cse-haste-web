import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {EvaluationPlan} from '../model/evaluation-plan';
import {EvaluationGroup} from '../model/evaluation-group';
import {User} from '../model/user';
import {Evaluatee} from '../model/evaluatee';
import {Evaluator} from '../model/evaluator';

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
  public isUpdateEvaluationGroupNameModalVisible = false;
  public isUpdateUserPasswordModalVisible = false;
  public isAddEvaluateeModalVisible = false;
  public isDeleteEvaluateeModalVisible = false;
  public isAddEvaluatorModalVisible = false;
  public isDeleteEvaluatorModalVisible = false;
  public isImportUserModalVisible = false;
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

  private updateEvaluationGroupNameSource = new Subject();
  public updateEvaluationGroupNameObservable = this.updateEvaluationGroupNameSource.asObservable();

  private updateUserPasswordSource = new Subject();
  public updateUserPasswordObservable = this.updateUserPasswordSource.asObservable();

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

  public showDeleteEvaluationPlanModal(evaluationPlan: EvaluationPlan): void {
    this.deleteEvaluationPlanSource.next(evaluationPlan);
    this.isDeleteEvaluationPlanModalVisible = true;
  }

  public dismissDeleteEvaluationPlanModal(): void {
    this.isDeleteEvaluationPlanModalVisible = false;
  }

  public showStartEvaluationPlanModal(evaluationPlan: EvaluationPlan): void {
    this.startEvaluationPlanSource.next(evaluationPlan);
    this.isStartEvaluationPlanModalVisible = true;
  }

  public dismissStartEvaluationPlanModal(): void {
    this.isStartEvaluationPlanModalVisible = false;
  }

  public showSubmitEvaluationPlanModal(evaluationPlan: EvaluationPlan): void {
    this.submitEvaluationPlanSource.next(evaluationPlan);
    this.isSubmitEvaluationPlanModalVisible = true;
  }

  public dismissSubmitEvaluationPlanModal(): void {
    this.isSubmitEvaluationPlanModalVisible = false;
  }

  public showCreateEvaluationGroupModal(evaluationPlan: EvaluationPlan): void {
    this.createEvaluationGroupSource.next(evaluationPlan);
    this.isCreateEvaluationGroupModalVisible = true;
  }

  public dismissCreateEvaluationGroupModal(): void {
    this.isCreateEvaluationGroupModalVisible = false;
  }

  public showDeleteEvaluationGroupModal(evaluationGroup: EvaluationGroup): void {
    this.deleteEvaluationGroupSource.next(evaluationGroup);
    this.isDeleteEvaluationGroupModalVisible = true;
  }

  public dismissDeleteEvaluationGroupModal(): void {
    this.isDeleteEvaluationGroupModalVisible = false;
  }

  public showUpdateEvaluationGroupNameModal(evaluationGroup: EvaluationGroup): void {
    this.updateEvaluationGroupNameSource.next(evaluationGroup);
    this.isUpdateEvaluationGroupNameModalVisible = true;
  }

  public dismissUpdateEvaluationGroupNameModal(): void {
    this.isUpdateEvaluationGroupNameModalVisible = false;
  }

  public showUpdateUserPasswordModal(user: User): void {
    this.updateUserPasswordSource.next(user);
    this.isUpdateUserPasswordModalVisible = true;
  }

  public dismissUpdateUserPasswordModal(): void {
    this.isUpdateUserPasswordModalVisible = false;
  }

  public showAddEvaluateeModal(evaluationGroup: EvaluationGroup): void {
    this.addEvaluateeSource.next(evaluationGroup);
    this.isAddEvaluateeModalVisible = true;
  }

  public dismissAddEvaluateeModal(): void {
    this.isAddEvaluateeModalVisible = false;
  }

  public showDeleteEvaluateeModal(evaluatee: Evaluatee): void {
    this.deleteEvaluateeSource.next(evaluatee);
    this.isDeleteEvaluateeModalVisible = true;
  }

  public dismissDeleteEvaluateeModal(): void {
    this.isDeleteEvaluateeModalVisible = false;
  }

  public showAddEvaluatorModal(evaluationGroup: EvaluationGroup): void {
    this.addEvaluatorSource.next(evaluationGroup);
    this.isAddEvaluatorModalVisible = true;
  }

  public dismissAddEvaluatorModal(): void {
    this.isAddEvaluatorModalVisible = false;
  }

  public showDeleteEvaluatorModal(evaluator: Evaluator): void {
    this.deleteEvaluatorSource.next(evaluator);
    this.isDeleteEvaluatorModalVisible = true;
  }

  public dismissDeleteEvaluatorModal(): void {
    this.isDeleteEvaluatorModalVisible = false;
  }

  public showImportUserModal(): void {
    this.isImportUserModalVisible = true;
  }

  public dismissImportUserModal(): void {
    this.isImportUserModalVisible = false;
  }

  public showExportEvaluationScoreFormsModal(evaluationPlan: EvaluationPlan): void {
    this.exportEvaluationScoreFormsSource.next(evaluationPlan);
    this.isExportEvaluationScoreFormsModalVisible = true;
  }

  public dismissExportEvaluationScoreFormsModal(): void {
    this.isExportEvaluationScoreFormsModalVisible = false;
  }
}
