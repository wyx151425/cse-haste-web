import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AriesHeaderComponent} from './component/aries-header/aries-header.component';
import {AriesFooterComponent} from './component/aries-footer/aries-footer.component';
import {AriesIndexComponent} from './component/aries-index/aries-index.component';
import {AriesPlanListComponent} from './component/aries-plan-list/aries-plan-list.component';
import {AriesPlanGroupsComponent} from './component/aries-plan-groups/aries-plan-groups.component';
import {AriesPlanGroupComponent} from './component/aries-plan-group/aries-plan-group.component';
import {AriesLoginComponent} from './component/aries-login/aries-login.component';
import {AriesPopoverComponent} from './component/aries-popover/aries-popover.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './service/user.service';
import {EvaluationPlanService} from './service/evaluation-plan.service';
import {EvaluationGroupService} from './service/evaluation-group.service';
import {EvaluateeService} from './service/evaluatee.service';
import {ProfessionalScoreFormService} from './service/professional-score-form.service';
import {AriesCandidateInfoComponent} from './component/aries-candidate-info/aries-candidate-info.component';
import {AriesScoreEditComponent} from './component/aries-score-edit/aries-score-edit.component';
import {AriesScoreSubmitComponent} from './component/aries-score-submit/aries-score-submit.component';
import {AriesGroupCandidatesComponent} from './component/aries-group-candidates/aries-group-candidates.component';
import {SafeUrlPipe} from './pipe/safe-url.pipe';
import {EvaluationGroupCreateModalComponent} from './component/evaluation-group-create-modal/evaluation-group-create-modal.component';
import {EvaluationPlanCreateModalComponent} from './component/evaluation-plan-create-modal/evaluation-plan-create-modal.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './service/interceptor.service';
import {PromptService} from './service/prompt.service';
import {ModalService} from './service/modal.service';
import {UserGuard} from './guard/user.guard';
import {AdminGuard} from './guard/admin.guard';
import {EvaluationPlansResolverService} from './resolver/evaluation-plans-resolver.service';
import {EvaluationPlanDeleteModalComponent} from './component/evaluation-plan-delete-modal/evaluation-plan-delete-modal.component';
import {EvaluationPlanStartModalComponent} from './component/evaluation-plan-start-modal/evaluation-plan-start-modal.component';
import {EvaluationPlanSubmitModalComponent} from './component/evaluation-plan-submit-modal/evaluation-plan-submit-modal.component';
import {EvaluationGroupDeleteModalComponent} from './component/evaluation-group-delete-modal/evaluation-group-delete-modal.component';
import {AriesPlanCandidatesComponent} from './component/aries-plan-candidates/aries-plan-candidates.component';
import {AriesPlanJudgesComponent} from './component/aries-plan-judges/aries-plan-judges.component';
import {CandidateImportModalComponent} from './component/candidate-import-modal/candidate-import-modal.component';
import {CandidateDeleteModalComponent} from './component/candidate-delete-modal/candidate-delete-modal.component';
import {JudgeImportModalComponent} from './component/judge-import-modal/judge-import-modal.component';
import {JudgeDeleteModalComponent} from './component/judge-delete-modal/judge-delete-modal.component';
import {AriesCandidateEditComponent} from './component/aries-candidate-edit/aries-candidate-edit.component';
import {AriesCandidatesManageComponent} from './component/aries-candidates-manage/aries-candidates-manage.component';
import {AriesJudgesManageComponent} from './component/aries-judges-manage/aries-judges-manage.component';
import {VoteExportModalComponent} from './component/vote-export-modal/vote-export-modal.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AriesCandidateAddComponent } from './component/aries-candidate-add/aries-candidate-add.component';
import { EvaluationPlanListComponent } from './component/evaluation-plan-list/evaluation-plan-list.component';
import { EvaluationGroupListComponent } from './component/evaluation-group-list/evaluation-group-list.component';
import { EvaluationScoreFormListComponent } from './component/evaluation-score-form-list/evaluation-score-form-list.component';
import { GroupScoreFormListComponent } from './component/group-score-form-list/group-score-form-list.component';
import { EvaluatorScoreFormListComponent } from './component/evaluator-score-form-list/evaluator-score-form-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AriesHeaderComponent,
    AriesFooterComponent,
    AriesIndexComponent,
    AriesPlanListComponent,
    AriesPlanGroupsComponent,
    AriesPlanGroupComponent,
    AriesLoginComponent,
    AriesPopoverComponent,
    AriesCandidateInfoComponent,
    AriesScoreEditComponent,
    AriesScoreSubmitComponent,
    AriesGroupCandidatesComponent,
    EvaluationGroupCreateModalComponent,
    EvaluationPlanCreateModalComponent,
    EvaluationPlanDeleteModalComponent,
    EvaluationPlanStartModalComponent,
    EvaluationPlanSubmitModalComponent,
    EvaluationGroupDeleteModalComponent,
    AriesPlanCandidatesComponent,
    AriesPlanJudgesComponent,
    CandidateImportModalComponent,
    CandidateDeleteModalComponent,
    JudgeImportModalComponent,
    JudgeDeleteModalComponent,
    AriesCandidateEditComponent,
    AriesCandidatesManageComponent,
    AriesJudgesManageComponent,
    VoteExportModalComponent,
    AriesCandidateAddComponent,
    EvaluationPlanListComponent,
    SafeUrlPipe,
    EvaluationGroupListComponent,
    EvaluationScoreFormListComponent,
    GroupScoreFormListComponent,
    EvaluatorScoreFormListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    EvaluationPlanService,
    EvaluationGroupService,
    EvaluateeService,
    ProfessionalScoreFormService,
    ModalService,
    PromptService,
    AdminGuard,
    UserGuard,
    EvaluationPlansResolverService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

