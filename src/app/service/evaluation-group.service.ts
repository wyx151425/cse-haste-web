import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HasteCallback} from '../model/util/haste-callback';
import {catchError, tap} from 'rxjs/operators';
import {Response} from '../model/dto/response';
import {Observable} from 'rxjs';
import {HasteService} from '../model/util/haste-service';
import {EvaluationGroup} from '../model/evaluation-group';
import {EvaluationPlan} from '../model/evaluation-plan';

@Injectable({
  providedIn: 'root'
})
export class EvaluationGroupService extends HasteService<EvaluationGroup> {

  private evaluationGroupsUrl = '/api/evaluationGroups';
  private evaluationPlansUrl = '/api/evaluationPlans';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public saveEvaluationGroup(evaluationGroup: EvaluationGroup, callback: HasteCallback<EvaluationGroup>): Observable<Response<EvaluationGroup>> {
    return this.httpClient.post<Response<EvaluationGroup>>(this.evaluationGroupsUrl, evaluationGroup).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<EvaluationGroup>>('save evaluation evaluationGroup'))
    );
  }

  public deleteEvaluationGroup(evaluationGroup: EvaluationGroup | number, callback: HasteCallback<EvaluationGroup>): Observable<Response<EvaluationGroup>> {
    const id = typeof evaluationGroup === 'number' ? evaluationGroup : evaluationGroup.id;
    const url = `${this.evaluationGroupsUrl}/${id}`;
    return this.httpClient.delete<Response<EvaluationGroup>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<EvaluationGroup>>('delete evaluation evaluationGroup'))
    );
  }

  public getEvaluationGroupById(evaluationGroup: EvaluationGroup | number, callback: HasteCallback<EvaluationGroup>): Observable<Response<EvaluationGroup>> {
    const id = typeof evaluationGroup === 'number' ? evaluationGroup : evaluationGroup.id;
    const url = `${this.evaluationGroupsUrl}/${id}`;
    return this.httpClient.get<Response<EvaluationGroup>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<EvaluationGroup>>('get evaluation evaluationGroup by id'))
    );
  }

  public getEvaluationGroupsByEvaluationPlan(evaluationPlan: EvaluationPlan | number, callback: HasteCallback<Array<EvaluationGroup>>): Observable<Response<Array<EvaluationGroup>>> {
    const evaluationPlanId = typeof evaluationPlan === 'number' ? evaluationPlan : evaluationPlan.id;
    const url = `${this.evaluationPlansUrl}/${evaluationPlanId}/evaluationGroups`;
    return this.httpClient.get<Response<Array<EvaluationGroup>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<EvaluationGroup>>>('get evaluation groups by evaluation plan'))
    );
  }
}
