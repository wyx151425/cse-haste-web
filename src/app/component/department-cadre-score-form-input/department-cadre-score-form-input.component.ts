import {Component, OnInit} from '@angular/core';
import {HasteCallback} from '../../model/util/haste-callback';
import {PromptService} from '../../service/prompt.service';
import {HasteService} from '../../model/util/haste-service';
import {Response} from '../../model/dto/response';
import {ModalService} from '../../service/modal.service';
import {Evaluator} from '../../model/evaluator';
import {EvaluatorService} from '../../service/evaluator.service';
import {DepartmentCadreScoreForm} from '../../model/department-cadre-score-form';
import {ActivatedRoute} from '@angular/router';
import {DepartmentCadreScoreFormService} from '../../service/department-cadre-score-form.service';

@Component({
  selector: 'app-department-cadre-score-form-list',
  templateUrl: './department-cadre-score-form-input.component.html',
  styleUrls: ['./department-cadre-score-form-input.component.css']
})
export class DepartmentCadreScoreFormInputComponent implements OnInit, HasteCallback<DepartmentCadreScoreForm> {

  private isSaveBtnDisabled = false;
  private isSubmitBtnDisabled = false;

  private evaluator: Evaluator;
  private departmentCadreScoreForm: DepartmentCadreScoreForm;

  constructor(private evaluatorService: EvaluatorService, private departmentCadreScoreFormService: DepartmentCadreScoreFormService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
    this.evaluator = new Evaluator();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<DepartmentCadreScoreForm> }) => {
      if (200 === data.response.statusCode) {
        this.departmentCadreScoreForm = data.response.data;
        this.evaluatorService.getEvaluatorById(this.departmentCadreScoreForm.evaluatorId, null).subscribe(response => {
          if (200 === response.statusCode) {
            this.evaluator = response.data;
          }
        });
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  private checkParamsValidity(): boolean {
    if (null === this.departmentCadreScoreForm.politicsPerformance) {
      this.promptService.pushError('请对政治表现进行评分');
      return false;
    }
    if (this.departmentCadreScoreForm.politicsPerformance < 1 || this.departmentCadreScoreForm.politicsPerformance > 15) {
      this.promptService.pushError('政治表现分数应在1~15分之间');
      return false;
    }
    if (null === this.departmentCadreScoreForm.abilityAndQuality) {
      this.promptService.pushError('请对能力素质进行评分');
      return false;
    }
    if (this.departmentCadreScoreForm.abilityAndQuality < 1 || this.departmentCadreScoreForm.abilityAndQuality > 20) {
      this.promptService.pushError('能力素质分数应在1~20分之间');
      return false;
    }
    if (null === this.departmentCadreScoreForm.workPerformance) {
      this.promptService.pushError('请对工作业绩进行评分');
      return false;
    }
    if (this.departmentCadreScoreForm.workPerformance < 1 || this.departmentCadreScoreForm.workPerformance > 50) {
      this.promptService.pushError('工作业绩分数应在1~50分之间');
      return false;
    }
    if (null === this.departmentCadreScoreForm.integrity) {
      this.promptService.pushError('请对廉洁从业与“一岗双责”进行评分');
      return false;
    }
    if (this.departmentCadreScoreForm.integrity < 1 || this.departmentCadreScoreForm.integrity > 15) {
      this.promptService.pushError('廉洁从业与“一岗双责”分数应在1~15分之间');
      return false;
    }
    return true;
  }

  public saveDepartmentCadreScoreFormScore(): void {
    if (this.checkParamsValidity()) {
      this.isSaveBtnDisabled = true;
      this.departmentCadreScoreFormService.updateDepartmentCadreScoreForm(this.departmentCadreScoreForm, this).subscribe();
    }
  }

  public submitDepartmentCadreScoreFormScore(): void {
    if (this.checkParamsValidity()) {
      this.isSubmitBtnDisabled = true;
      this.departmentCadreScoreFormService.submitDepartmentCadreScoreForm(this.departmentCadreScoreForm, this).subscribe();
    }
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isSaveBtnDisabled = false;
    this.isSubmitBtnDisabled = false;
  }

  onSuccess(object: DepartmentCadreScoreForm): void {
    if (null !== object) {
      this.departmentCadreScoreForm = object;
    }
    if (this.isSaveBtnDisabled) {
      this.promptService.pushSuccess('保存成功');
      this.isSaveBtnDisabled = false;
    }
    if (this.isSubmitBtnDisabled) {
      this.promptService.pushSuccess('提交成功');
      this.isSubmitBtnDisabled = false;
    }
  }
}
