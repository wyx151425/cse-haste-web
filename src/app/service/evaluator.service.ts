import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HasteService} from '../model/util/haste-service';
import {Evaluator} from '../model/evaluator';
import {HasteCallback} from '../model/util/haste-callback';
import {Observable} from 'rxjs';
import {Response} from '../model/dto/response';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvaluatorService extends HasteService<Evaluator> {

  private evaluatorsUrl = '/api/evaluators';
  private evaluationGroupsUrl = '/api/evaluationGroups';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public addEvaluator(evaluator: Evaluator, callback: HasteCallback<Evaluator>): Observable<Response<Evaluator>> {
    return this.httpClient.post<Response<Evaluator>>(this.evaluatorsUrl, evaluator).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Evaluator>>('add evaluator'))
    );
  }

  public deleteEvaluator(evaluator: Evaluator | number, callback: HasteCallback<Evaluator>): Observable<Response<Evaluator>> {
    const id = typeof evaluator === 'number' ? evaluator : evaluator.id;
    const url = `${this.evaluatorsUrl}/${id}`;
    return this.httpClient.delete<Response<Evaluator>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Evaluator>>('delete evaluator'))
    );
  }

  public getEvaluatorsByEvaluationGroup(evaluationGroupId: number, callback: HasteCallback<Array<Evaluator>>): Observable<Response<Array<Evaluator>>> {
    const url = `${this.evaluationGroupsUrl}/${evaluationGroupId}/evaluators`;
    return this.httpClient.get<Response<Array<Evaluator>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<Evaluator>>>('get evaluators by evaluation evaluationGroup'))
    );
  }

}
