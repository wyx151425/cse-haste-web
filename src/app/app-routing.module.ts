import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HasteUserLoginComponent} from './component/haste-user-login/haste-user-login.component';
import {EvaluationPlansResolverService} from './resolver/evaluation-plans-resolver.service';
import {UserGuard} from './guard/user.guard';
import {AdminGuard} from './guard/admin.guard';
import {EvaluationPlanListComponent} from './component/evaluation-plan-list/evaluation-plan-list.component';
import {EvaluationGroupListComponent} from './component/evaluation-group-list/evaluation-group-list.component';
import {EvaluationGroupsResolverService} from './resolver/evaluation-groups-resolver.service';
import {EvaluateeListComponent} from './component/evaluatee-list/evaluatee-list.component';
import {EvaluateesResolverService} from './resolver/evaluatees-resolver.service';
import {EvaluatorListComponent} from './component/evaluator-list/evaluator-list.component';
import {EvaluatorsResolverService} from './resolver/evaluators-resolver.service';
import {NotSelectEvaluateesResolverService} from './resolver/not-select-evaluatees-resolver.service';
import {NotSelectEvaluatorsResolverService} from './resolver/not-select-evaluators-resolver.service';
import {EvaluateeSelectListComponent} from './component/evaluatee-select-list/evaluatee-select-list.component';
import {EvaluatorSelectListComponent} from './component/evaluator-select-list/evaluator-select-list.component';
import {EvaluatorScoreFormListComponent} from './component/evaluator-score-form-list/evaluator-score-form-list.component';
import {EvaluatorScoreFormsResolverService} from './resolver/evaluator-score-forms-resolver.service';

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
    path: 'evaluationGroup/:evaluationGroupId/evaluatee/list',
    component: EvaluateeListComponent,
    canActivate: [AdminGuard],
    resolve: {response: EvaluateesResolverService}
  },
  {
    path: 'evaluationGroup/:evaluationGroupId/evaluator/list',
    component: EvaluatorListComponent,
    canActivate: [AdminGuard],
    resolve: {response: EvaluatorsResolverService}
  },
  {
    path: 'evaluationGroup/:evaluationGroupId/notSelectEvaluatee/list',
    component: EvaluateeSelectListComponent,
    canActivate: [AdminGuard],
    resolve: {response: NotSelectEvaluateesResolverService}
  },
  {
    path: 'evaluationGroup/:evaluationGroupId/notSelectEvaluator/list',
    component: EvaluatorSelectListComponent,
    canActivate: [AdminGuard],
    resolve: {response: NotSelectEvaluatorsResolverService}
  },
  {
    path: 'user/:userId/evaluationScoreForm/list',
    component: EvaluatorScoreFormListComponent,
    canActivate: [UserGuard],
    resolve: {response: EvaluatorScoreFormsResolverService}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
