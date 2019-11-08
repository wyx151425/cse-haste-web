import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HasteCallback} from '../model/util/haste-callback';
import {HasteService} from '../model/util/haste-service';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Response} from '../model/dto/response';
import {Evaluator} from '../model/evaluator';
import {DepartmentCadreScoreForm} from '../model/department-cadre-score-form';

@Injectable({
  providedIn: 'root'
})
export class DepartmentCadreScoreFormService extends HasteService<DepartmentCadreScoreForm> {

  private departmentCadreScoreFormsUrl = '/api/departmentCadreScoreForms';
  private evaluatorsUrl = '/api/evaluators';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public updateDepartmentCadreScoreForm(departmentCadreScoreForm: DepartmentCadreScoreForm, callback: HasteCallback<DepartmentCadreScoreForm>): Observable<Response<DepartmentCadreScoreForm>> {
    return this.httpClient.put<Response<DepartmentCadreScoreForm>>(this.departmentCadreScoreFormsUrl, departmentCadreScoreForm).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<DepartmentCadreScoreForm>>('update department cadre score form'))
    );
  }

  public submitDepartmentCadreScoreForm(leaderCadreScoreForm: DepartmentCadreScoreForm, callback: HasteCallback<DepartmentCadreScoreForm>): Observable<Response<DepartmentCadreScoreForm>> {
    const url = `${this.departmentCadreScoreFormsUrl}/submit`;
    return this.httpClient.put<Response<DepartmentCadreScoreForm>>(url, leaderCadreScoreForm).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<DepartmentCadreScoreForm>>('submit department cadre score form'))
    );
  }

  public getDepartmentCadreScoreFormById(departmentCadreScoreForm: DepartmentCadreScoreForm | number, callback: HasteCallback<DepartmentCadreScoreForm>): Observable<Response<DepartmentCadreScoreForm>> {
    const id = typeof departmentCadreScoreForm === 'number' ? departmentCadreScoreForm : departmentCadreScoreForm.id;
    const url = `${this.departmentCadreScoreFormsUrl}/${id}`;
    return this.httpClient.get<Response<DepartmentCadreScoreForm>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<DepartmentCadreScoreForm>>('get department cadre score form by id'))
    );
  }

  public getDepartmentCadreScoreFormsByEvaluator(evaluator: Evaluator | number, callback: HasteCallback<Array<DepartmentCadreScoreForm>>): Observable<Response<Array<DepartmentCadreScoreForm>>> {
    const evaluatorId = typeof evaluator === 'number' ? evaluator : evaluator.id;
    const url = `${this.evaluatorsUrl}/${evaluatorId}/departmentCadreScoreForms`;
    return this.httpClient.get<Response<Array<DepartmentCadreScoreForm>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<DepartmentCadreScoreForm>>>('get department cadre score forms by id'))
    );
  }
}
