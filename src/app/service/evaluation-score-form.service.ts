import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Response} from '../model/dto/response';
import {HasteCallback} from '../model/util/haste-callback';
import {HasteService} from '../model/util/haste-service';
import {EvaluationScoreForm} from '../model/evaluation-score-form';

@Injectable({
  providedIn: 'root'
})
export class EvaluationScoreFormService extends HasteService<EvaluationScoreForm> {

  private evaluationScoreFormsUrl = '/api/evaluationScoreForms';
  private evaluatorsUrl = '/api/evaluators';
  private evaluationGroupsUrl = '/api/evaluationGroups';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public getEvaluationScoreFormsByEvaluator(evaluatorId: number, callback: HasteCallback<Array<EvaluationScoreForm>>): Observable<Response<Array<EvaluationScoreForm>>> {
    const url = `${this.evaluatorsUrl}/${evaluatorId}/evaluationScoreForms`;
    return this.httpClient.get<Response<Array<EvaluationScoreForm>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<EvaluationScoreForm>>>('get evaluation score forms by id'))
    );
  }

  public getEvaluationScoreFormsByEvaluationGroupId(evaluationGroupId: number, callback: HasteCallback<Array<EvaluationScoreForm>>): Observable<Response<Array<EvaluationScoreForm>>> {
    const url = `${this.evaluationGroupsUrl}/${evaluationGroupId}/evaluationScoreForms`;
    return this.httpClient.get<Response<Array<EvaluationScoreForm>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<EvaluationScoreForm>>>('get evaluation score forms by evaluation group id'))
    );
  }

  public exportEvaluationScoreFormsByEvaluatee()
}
