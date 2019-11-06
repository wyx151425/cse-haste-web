import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HasteHeaderComponent} from './component/haste-header/haste-header.component';
import {HasteFooterComponent} from './component/haste-footer/haste-footer.component';
import {HasteUserLoginComponent} from './component/haste-user-login/haste-user-login.component';
import {HastePopoverComponent} from './component/haste-popover/haste-popover.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './service/user.service';
import {EvaluationPlanService} from './service/evaluation-plan.service';
import {EvaluationGroupService} from './service/evaluation-group.service';
import {EvaluateeService} from './service/evaluatee.service';
import {ProfessionalScoreFormService} from './service/professional-score-form.service';
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
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {EvaluationPlanListComponent} from './component/evaluation-plan-list/evaluation-plan-list.component';
import {EvaluationGroupListComponent} from './component/evaluation-group-list/evaluation-group-list.component';
import {EvaluationScoreFormListComponent} from './component/evaluation-score-form-list/evaluation-score-form-list.component';
import {EvaluatorScoreFormListComponent} from './component/evaluator-score-form-list/evaluator-score-form-list.component';
import { EvaluateeListComponent } from './component/evaluatee-list/evaluatee-list.component';
import { EvaluatorListComponent } from './component/evaluator-list/evaluator-list.component';
import { EvaluatorSelectListComponent } from './component/evaluator-select-list/evaluator-select-list.component';
import { EvaluateeSelectListComponent } from './component/evaluatee-select-list/evaluatee-select-list.component';
import { UserImportModalComponent } from './component/user-import-modal/user-import-modal.component';
import { EvaluatorScoreFormInputComponent } from './component/evaluator-score-form-input/evaluator-score-form-input.component';
import { LeadershipScoreFormInputComponent } from './component/leadership-score-form-input/leadership-score-form-input.component';
import { LeaderCadreScoreFormInputComponent } from './component/leader-cadre-score-form-input/leader-cadre-score-form-input.component';
import { ProfessionalScoreFormInputComponent } from './component/professional-score-form-input/professional-score-form-input.component';
import { EvaluatorDeleteModalComponent } from './component/evaluator-delete-modal/evaluator-delete-modal.component';
import { EvaluateeDeleteModalComponent } from './component/evaluatee-delete-modal/evaluatee-delete-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HasteHeaderComponent,
    HasteFooterComponent,
    HasteUserLoginComponent,
    HastePopoverComponent,
    EvaluationGroupCreateModalComponent,
    EvaluationPlanCreateModalComponent,
    EvaluationPlanDeleteModalComponent,
    EvaluationPlanStartModalComponent,
    EvaluationPlanSubmitModalComponent,
    EvaluationGroupDeleteModalComponent,
    EvaluationPlanListComponent,
    SafeUrlPipe,
    EvaluationGroupListComponent,
    EvaluationScoreFormListComponent,
    EvaluatorScoreFormListComponent,
    EvaluateeListComponent,
    EvaluatorListComponent,
    EvaluatorSelectListComponent,
    EvaluateeSelectListComponent,
    UserImportModalComponent,
    EvaluatorScoreFormInputComponent,
    LeadershipScoreFormInputComponent,
    LeaderCadreScoreFormInputComponent,
    ProfessionalScoreFormInputComponent,
    EvaluatorDeleteModalComponent,
    EvaluateeDeleteModalComponent
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

