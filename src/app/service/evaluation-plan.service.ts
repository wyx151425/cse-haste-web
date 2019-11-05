import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HasteService} from '../model/util/haste-service';
import {EvaluationPlan} from '../model/evaluation-plan';
import {Response} from '../model/dto/response';
import {HasteCallback} from '../model/util/haste-callback';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvaluationPlanService extends HasteService<EvaluationPlan> {

  private evaluationPlansUrl = '/api/evaluationPlans';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public saveEvaluationPlan(evaluationPlan: EvaluationPlan, callback: HasteCallback<EvaluationPlan>): Observable<Response<EvaluationPlan>> {
    return this.httpClient.post<Response<EvaluationPlan>>(this.evaluationPlansUrl, evaluationPlan).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<EvaluationPlan>>('save evaluation plan'))
    );
  }

  public deleteEvaluationPlan(evaluationPlan: EvaluationPlan | number, callback: HasteCallback<EvaluationPlan>): Observable<Response<EvaluationPlan>> {
    const id = typeof evaluationPlan === 'number' ? evaluationPlan : evaluationPlan.id;
    const url = `${this.evaluationPlansUrl}/${id}`;
    return this.httpClient.delete<Response<EvaluationPlan>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<EvaluationPlan>>('delete evaluation plan'))
    );
  }

  public startEvaluationPlan(evaluationPlan: EvaluationPlan | number, callback: HasteCallback<EvaluationPlan>): Observable<Response<EvaluationPlan>> {
    const id = typeof evaluationPlan === 'number' ? evaluationPlan : evaluationPlan.id;
    const url = `${this.evaluationPlansUrl}/${id}/start`;
    return this.httpClient.put<Response<EvaluationPlan>>(url, null).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<EvaluationPlan>>('start evaluation plan'))
    );
  }

  public submitEvaluationPlan(evaluationPlan: EvaluationPlan | number, callback: HasteCallback<EvaluationPlan>): Observable<Response<EvaluationPlan>> {
    const id = typeof evaluationPlan === 'number' ? evaluationPlan : evaluationPlan.id;
    const url = `${this.evaluationPlansUrl}/${id}/submit`;
    return this.httpClient.put<Response<EvaluationPlan>>(url, null).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<EvaluationPlan>>('submit evaluation plan'))
    );
  }

  public getEvaluationPlanById(id: number, callback: HasteCallback<EvaluationPlan>): Observable<Response<EvaluationPlan>> {
    const url = `${this.evaluationPlansUrl}/${id}`;
    return this.httpClient.get<Response<EvaluationPlan>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<EvaluationPlan>>('get evaluation plan by id'))
    );
  }

  public getEvaluationPlans(callback: HasteCallback<Array<EvaluationPlan>>): Observable<Response<Array<EvaluationPlan>>> {
    return this.httpClient.get<Response<Array<EvaluationPlan>>>(this.evaluationPlansUrl).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<EvaluationPlan>>>('get evaluation plans'))
    );
  }
}
