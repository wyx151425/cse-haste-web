import {Component, OnInit} from '@angular/core';
import {HasteService} from '../../model/util/haste-service';
import {EvaluationPlan} from '../../model/evaluation-plan';
import {ModalService} from '../../service/modal.service';
import {Response} from '../../model/dto/response';
import {ActivatedRoute} from '@angular/router';
import {PromptService} from '../../service/prompt.service';
import {Evaluatee} from '../../model/evaluatee';
import {EvaluateeService} from '../../service/evaluatee.service';
import {HasteCallback} from '../../model/util/haste-callback';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-aries-plan-candidates',
  templateUrl: './aries-plan-candidates.component.html',
  styleUrls: ['./aries-plan-candidates.component.css']
})
export class AriesPlanCandidatesComponent implements OnInit {

  private plan: EvaluationPlan;

  constructor(
    private candidateService: EvaluateeService,
    private modalService: ModalService,
    private promptService: PromptService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<EvaluationPlan> }) => {
      if (200 === data.response.statusCode) {
        this.plan = data.response.data;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public getNewCandidates(candidates: Array<Evaluatee>): void {
    for (const candidate of candidates) {
      this.plan.candidateList.push(candidate);
    }
  }

  public deleteCandidate(candidate: Evaluatee): void {
    const index = this.plan.candidateList.indexOf(candidate);
    this.plan.candidateList.splice(index, 1);
  }

  public exportCandidateInfo(id: number): void {
    this.candidateService.exportCandidateInfo(id).subscribe(
      (response: HttpResponse<any>) => {
        if (!response) {
          this.promptService.pushError('导出失败');
          return;
        }
        const url = window.URL.createObjectURL(new Blob([response.body],
          {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}));
        const link = document.createElement('a');
        link.style.display = 'none';
        let name = decodeURI((response.headers.get('content-disposition').split('filename='))[1]);
        const userAgent = navigator.userAgent;
        if (userAgent.indexOf('Edge') > -1) {
          name += '.xlsx';
        }
        link.download = name;
        link.href = url;

        document.body.appendChild(link);
        link.click();
      }
    );
  }
}
