import {Injectable} from '@angular/core';
import {Response} from '../model/dto/response';
import {HasteCallback} from '../model/util/haste-callback';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {HasteService} from '../model/util/haste-service';
import {Evaluatee} from '../model/evaluatee';

@Injectable({
  providedIn: 'root'
})
export class EvaluateeService extends HasteService<Evaluatee | string> {

  private evaluateesUrl = '/api/evaluatees';
  private evaluationGroupsUrl = '/api/evaluationGroups';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public addEvaluatee(evaluatee: Evaluatee, callback: HasteCallback<Evaluatee>): Observable<Response<Evaluatee>> {
    return this.httpClient.post<Response<Evaluatee>>(this.evaluateesUrl, evaluatee).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Evaluatee>>('add evaluatee'))
    );
  }

  public deleteEvaluatee(evaluatee: Evaluatee | number, callback: HasteCallback<Evaluatee>): Observable<Response<Evaluatee>> {
    const id = typeof evaluatee === 'number' ? evaluatee : evaluatee.id;
    const url = `${this.evaluateesUrl}/${id}`;
    return this.httpClient.delete<Response<Evaluatee>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Evaluatee>>('delete evaluatee'))
    );
  }

  public getEvaluateesByEvaluationGroup(evaluationGroupId: number, callback: HasteCallback<Array<Evaluatee>>): Observable<Response<Array<Evaluatee>>> {
    const url = `${this.evaluationGroupsUrl}/${evaluationGroupId}/evaluatees`;
    return this.httpClient.get<Response<Array<Evaluatee>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<Evaluatee>>>('get evaluatees by evaluation evaluationGroup'))
    );
  }
}
