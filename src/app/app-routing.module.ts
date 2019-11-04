import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AriesIndexComponent} from './component/aries-index/aries-index.component';
import {AriesCandidateInfoComponent} from './component/aries-candidate-info/aries-candidate-info.component';
import {AriesScoreEditComponent} from './component/aries-score-edit/aries-score-edit.component';
import {AriesScoreSubmitComponent} from './component/aries-score-submit/aries-score-submit.component';
import {AriesLoginComponent} from './component/aries-login/aries-login.component';
import {AriesPlanListComponent} from './component/aries-plan-list/aries-plan-list.component';
import {AriesPlanGroupComponent} from './component/aries-plan-group/aries-plan-group.component';
import {AriesPlanGroupsComponent} from './component/aries-plan-groups/aries-plan-groups.component';
import {EvaluationPlansResolverService} from './resolver/evaluation-plans-resolver.service';
import {UserGuard} from './guard/user.guard';
import {AdminGuard} from './guard/admin.guard';
import {EvaluationGroupsResolverService} from './resolver/evaluation-groups-resolver.service';
import {AriesPlanCandidatesComponent} from './component/aries-plan-candidates/aries-plan-candidates.component';
import {AriesPlanJudgesComponent} from './component/aries-plan-judges/aries-plan-judges.component';
import {AriesCandidateEditComponent} from './component/aries-candidate-edit/aries-candidate-edit.component';
import {AriesCandidatesManageComponent} from './component/aries-candidates-manage/aries-candidates-manage.component';
import {AriesJudgesManageComponent} from './component/aries-judges-manage/aries-judges-manage.component';
import {AriesCandidateAddComponent} from './component/aries-candidate-add/aries-candidate-add.component';

const routes: Routes = [
  {path: '', redirectTo: 'evaluationPlan/list', pathMatch: 'full', canActivate: [UserGuard]},
  {path: 'index', component: AriesIndexComponent, canActivate: [UserGuard]},
  {path: 'login', component: AriesLoginComponent},
  // {
  //   path: 'candidate/:id/score/edit',
  //   component: AriesScoreEditComponent,
  //   canActivate: [UserGuard]
  // },
  // {
  //   path: 'judge/:judgeId/score/submit',
  //   component: AriesScoreSubmitComponent,
  //   canActivate: [UserGuard]
  // },
  {path: 'evaluationPlan/list', component: AriesPlanListComponent, canActivate: [AdminGuard], resolve: {response: EvaluationPlansResolverService}},
  // {
  //   path: 'plan/:evaluationPlanId/groups',
  //   component: AriesPlanGroupsComponent,
  //   canActivate: [AdminGuard],
  //   resolve: {response: EvaluationGroupsResolverService}
  // },
  // {
  //   path: 'plan/:planId/candidates',
  //   component: AriesPlanCandidatesComponent,
  //   canActivate: [AdminGuard]
  // },
  // {
  //   path: 'plan/:planId/judges',
  //   component: AriesPlanJudgesComponent,
  //   canActivate: [AdminGuard]
  // },
  // {path: 'plan/evaluationGroup/:groupId', component: AriesPlanGroupComponent, canActivate: [AdminGuard]},
  // {
  //   path: 'candidate/:id/info',
  //   component: AriesCandidateInfoComponent,
  //   canActivate: [UserGuard]
  // },
  // {
  //   path: 'candidate/:id/index',
  //   component: AriesCandidateEditComponent
  // },
  // {
  //   path: 'candidate/:id/edit',
  //   component: AriesCandidateEditComponent,
  //   canActivate: [AdminGuard]
  // },
  // {
  //   path: 'plan/:planId/evaluationGroup/:groupId/candidates',
  //   component: AriesCandidatesManageComponent,
  //   canActivate: [AdminGuard]
  // },
  // {
  //   path: 'plan/:planId/evaluationGroup/:groupId/judges',
  //   component: AriesJudgesManageComponent,
  //   canActivate: [AdminGuard]
  // },
  // {
  //   path: 'plan/:planId/candidate/add',
  //   component: AriesCandidateAddComponent,
  //   canActivate: [AdminGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
