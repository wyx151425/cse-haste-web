import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HasteService} from '../model/util/haste-service';
import {Evaluator} from '../model/evaluator';
import {HasteCallback} from '../model/util/haste-callback';
import {Observable} from 'rxjs';
import {Response} from '../model/dto/response';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class EvaluatorService extends HasteService<Evaluator | User> {

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

  public getEvaluatorById(id: number, callback: HasteCallback<Evaluator>): Observable<Response<Evaluator>> {
    const url = `${this.evaluatorsUrl}/${id}`;
    return this.httpClient.get<Response<Evaluator>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Evaluator>>('get evaluator by id'))
    );
  }

  public getEvaluatorsByEvaluationGroup(evaluationGroupId: number, callback: HasteCallback<Array<Evaluator>>): Observable<Response<Array<Evaluator>>> {
    const url = `${this.evaluationGroupsUrl}/${evaluationGroupId}/evaluators`;
    return this.httpClient.get<Response<Array<Evaluator>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<Evaluator>>>('get evaluators by evaluation group'))
    );
  }

  public getNotSelectEvaluatorsByEvaluationGroup(evaluationGroupId: number, callback: HasteCallback<Array<User>>): Observable<Response<Array<User>>> {
    const url = `${this.evaluationGroupsUrl}/${evaluationGroupId}/notSelectEvaluators`;
    return this.httpClient.get<Response<Array<User>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<User>>>('get not select evaluators by evaluation group'))
    );
  }

  public getNotSelectEvaluatorsByEvaluationGroupAndName(evaluationGroupId: number, name: string, callback: HasteCallback<Array<User>>): Observable<Response<Array<User>>> {
    const url = `${this.evaluationGroupsUrl}/${evaluationGroupId}/notSelectEvaluators?name=${name}`;
    return this.httpClient.get<Response<Array<User>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<User>>>('get not select evaluators by evaluation group'))
    );
  }
}
