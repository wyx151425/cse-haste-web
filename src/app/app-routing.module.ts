import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HasteUserLoginComponent} from './component/haste-user-login/haste-user-login.component';
import {EvaluationPlansResolverService} from './resolver/evaluation-plans-resolver.service';
import {UserGuard} from './guard/user.guard';
import {AdminGuard} from './guard/admin.guard';
import {EvaluationPlanListComponent} from './component/evaluation-plan-list/evaluation-plan-list.component';
import {EvaluationGroupListComponent} from './component/evaluation-group-list/evaluation-group-list.component';
import {EvaluationGroupsResolverService} from './resolver/evaluation-groups-resolver.service';
import {EvaluationGroupEvaluateeListComponent} from './component/evaluation-group-evaluatee-list/evaluation-group-evaluatee-list.component';
import {EvaluateesResolverService} from './resolver/evaluatees-resolver.service';
import {EvaluationGroupEvaluatorListComponent} from './component/evaluation-group-evaluator-list/evaluation-group-evaluator-list.component';
import {EvaluatorsResolverService} from './resolver/evaluators-resolver.service';
import {NotSelectEvaluateesResolverService} from './resolver/not-select-evaluatees-resolver.service';
import {NotSelectEvaluatorsResolverService} from './resolver/not-select-evaluators-resolver.service';
import {EvaluationGroupEvaluateeSelectComponent} from './component/evaluation-group-evaluatee-select/evaluation-group-evaluatee-select.component';
import {EvaluationGroupEvaluatorSelectComponent} from './component/evaluation-group-evaluator-select/evaluation-group-evaluator-select.component';
import {EvaluatorScoreFormListComponent} from './component/evaluator-score-form-list/evaluator-score-form-list.component';
import {EvaluatorScoreFormsResolverService} from './resolver/evaluator-score-forms-resolver.service';
import {LeaderCadreScoreFormInputComponent} from './component/leader-cadre-score-form-input/leader-cadre-score-form-input.component';
import {ProfessionalScoreFormInputComponent} from './component/professional-score-form-input/professional-score-form-input.component';
import {LeadershipScoreFormInputComponent} from './component/leadership-score-form-input/leadership-score-form-input.component';
import {LeadershipScoreFormResolverService} from './resolver/leadership-score-form-resolver.service';
import {LeaderCadreScoreFormResolverService} from './resolver/leader-cadre-score-form-resolver.service';
import {ProfessionalScoreFormResolverService} from './resolver/professional-score-form-resolver.service';
import {EvaluationScoreFormListComponent} from './component/evaluation-score-form-list/evaluation-score-form-list.component';
import {GroupScoreFormsResolverService} from './resolver/group-score-forms-resolver.service';
import {EvaluationPlanEvaluateeListComponent} from './component/evaluation-plan-evaluatee-list/evaluation-plan-evaluatee-list.component';
import {EvaluationPlanEvaluateesResolverService} from './resolver/evaluation-plan-evaluatees-resolver.service';
import {EvaluationPlanNotSelectEvaluateesResolverService} from './resolver/evaluation-plan-not-select-evaluatees-resolver.service';
import {EvaluationPlanEvaluateeSelectComponent} from './component/evaluation-plan-evaluatee-select/evaluation-plan-evaluatee-select.component';
import {DepartmentCadreScoreFormResolverService} from './resolver/department-cadre-score-form-resolver.service';
import {DepartmentCadreScoreFormInputComponent} from './component/department-cadre-score-form-input/department-cadre-score-form-input.component';
import {UserManageListComponent} from './component/user-manage-list/user-manage-list.component';
import {UsersResolverService} from './resolver/users-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: 'evaluationPlan/list', pathMatch: 'full', canActivate: [UserGuard]},
  {path: 'index', component: EvaluationPlanListComponent, canActivate: [UserGuard]},
  {path: 'login', component: HasteUserLoginComponent},
  {
    path: 'evaluationPlan/list',
    component: EvaluationPlanListComponent,
    canActivate: [AdminGuard],
    resolve: {response: EvaluationPlansResolverService}
  },
  {
    path: 'evaluationPlan/:evaluationPlanId/evaluationGroup/list',
    component: EvaluationGroupListComponent,
    canActivate: [AdminGuard],
    resolve: {response: EvaluationGroupsResolverService}
  },
  {
    path: 'evaluationPlan/:evaluationPlanId/evaluatee/list',
    component: EvaluationPlanEvaluateeListComponent,
    canActivate: [AdminGuard],
    resolve: {response: EvaluationPlanEvaluateesResolverService}
  },
  {
    path: 'evaluationPlan/:evaluationPlanId/notSelectEvaluatee/list',
    component: EvaluationPlanEvaluateeSelectComponent,
    canActivate: [AdminGuard],
    resolve: {response: EvaluationPlanNotSelectEvaluateesResolverService}
  },
  {
    path: 'evaluationGroup/:evaluationGroupId/evaluatee/list',
    component: EvaluationGroupEvaluateeListComponent,
    canActivate: [AdminGuard],
    resolve: {response: EvaluateesResolverService}
  },
  {
    path: 'evaluationGroup/:evaluationGroupId/evaluator/list',
    component: EvaluationGroupEvaluatorListComponent,
    canActivate: [AdminGuard],
    resolve: {response: EvaluatorsResolverService}
  },
  {
    path: 'evaluationGroup/:evaluationGroupId/notSelectEvaluatee/list',
    component: EvaluationGroupEvaluateeSelectComponent,
    canActivate: [AdminGuard],
    resolve: {response: NotSelectEvaluateesResolverService}
  },
  {
    path: 'evaluationGroup/:evaluationGroupId/notSelectEvaluator/list',
    component: EvaluationGroupEvaluatorSelectComponent,
    canActivate: [AdminGuard],
    resolve: {response: NotSelectEvaluatorsResolverService}
  },
  {
    path: 'evaluationGroup/:evaluationGroupId/evaluationScoreForm/list',
    component: EvaluationScoreFormListComponent,
    canActivate: [AdminGuard],
    resolve: {response: GroupScoreFormsResolverService}
  },
  {
    path: 'user/:userId/evaluationScoreForm/list',
    component: EvaluatorScoreFormListComponent,
    canActivate: [UserGuard],
    resolve: {response: EvaluatorScoreFormsResolverService}
  },
  {
    path: 'user/manage/list',
    component: UserManageListComponent,
    canActivate: [AdminGuard],
    resolve: {response: UsersResolverService}
  },
  {
    path: 'leadershipScoreForm/:leadershipScoreFormId/input',
    component: LeadershipScoreFormInputComponent,
    canActivate: [UserGuard],
    resolve: {response: LeadershipScoreFormResolverService}
  },
  {
    path: 'leaderCadreScoreForm/:leaderCadreScoreFormId/input',
    component: LeaderCadreScoreFormInputComponent,
    canActivate: [UserGuard],
    resolve: {response: LeaderCadreScoreFormResolverService}
  },
  {
    path: 'departmentCadreScoreForm/:departmentCadreScoreFormId/input',
    component: DepartmentCadreScoreFormInputComponent,
    canActivate: [UserGuard],
    resolve: {response: DepartmentCadreScoreFormResolverService}
  },
  {
    path: 'professionalScoreForm/:professionalScoreFormId/input',
    component: ProfessionalScoreFormInputComponent,
    canActivate: [UserGuard],
    resolve: {response: ProfessionalScoreFormResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
