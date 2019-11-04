import {Component, OnInit} from '@angular/core';
import {Response} from '../../model/dto/response';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {Evaluatee} from '../../model/evaluatee';
import {getFileNativeUrl} from '../../app.component';
import {HasteCallback} from '../../model/util/haste-callback';
import {EvaluateeService} from '../../service/evaluatee.service';

@Component({
  selector: 'app-aries-candidate-edit',
  templateUrl: './aries-candidate-edit.component.html',
  styleUrls: ['./aries-candidate-edit.component.css']
})
export class AriesCandidateEditComponent implements OnInit, HasteCallback<Evaluatee> {

  private candidate: Evaluatee;
  private portraitFile: any;
  private isFileSelected = false;
  private defaultPortrait: string;
  private isBtnDisabled = false;

  constructor(
    private candidateService: EvaluateeService,
    private modalService: ModalService,
    private promptService: PromptService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<Evaluatee> }) => {
      if (200 === data.response.statusCode) {
        this.candidate = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public selectFile(event: any): void {
    this.portraitFile = event.target;
    this.defaultPortrait = this.candidate.portrait;
    this.candidate.portrait = getFileNativeUrl(event.target.files[0]);
    this.isFileSelected = true;
  }

  public deselectFile(): void {
    this.portraitFile.value = '';
    this.candidate.portrait = this.defaultPortrait;
    this.isFileSelected = false;
  }

  public saveCandidatePortrait(): void {
    if (!this.isFileSelected) {
      this.promptService.pushWarning('请选择图片文件');
      return;
    }
    this.isBtnDisabled = true;
    const param = new FormData();
    param.append('id', this.candidate.id.toString());
    param.append('file', this.portraitFile.files[0], this.portraitFile.files[0].name);
    this.candidateService.updateCandidatePortrait(param, null).subscribe((response: Response<Evaluatee>) => {
      if (200 === response.statusCode) {
        this.promptService.pushSuccess('保存成功');
        this.candidate.portrait = response.data.portrait;
        this.portraitFile.value = '';
        this.isFileSelected = false;
      } else {
        this.promptService.pushError(HasteService.getMessage(response.statusCode));
      }
      this.isBtnDisabled = false;
    });
  }

  public saveCandidateInfo(): void {
    this.isBtnDisabled = true;
    this.candidateService.updateCandidate(this.candidate, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushSuccess(message);
    this.isBtnDisabled = false;
  }

  onSuccess(candidate: Evaluatee): void {
    this.promptService.pushSuccess('保存成功');
    this.isBtnDisabled = false;
  }
}
