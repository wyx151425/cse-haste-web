import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HasteService} from '../model/util/haste-service';
import {LeadershipScoreForm} from '../model/leadership-score-form';
import {HasteCallback} from '../model/util/haste-callback';
import {Observable} from 'rxjs';
import {Response} from '../model/dto/response';
import {catchError, tap} from 'rxjs/operators';
import {Evaluator} from '../model/evaluator';

@Injectable({
  providedIn: 'root'
})
export class LeadershipScoreFormService extends HasteService<LeadershipScoreForm> {

  private leadershipScoreFormsUrl = '/api/leadershipScoreForms';
  private evaluatorsUrl = '/api/evaluators';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public submitLeadershipScoreForm(leadershipScoreForm: LeadershipScoreForm | number, callback: HasteCallback<LeadershipScoreForm>): Observable<Response<LeadershipScoreForm>> {
    const id = typeof leadershipScoreForm === 'number' ? leadershipScoreForm : leadershipScoreForm.id;
    const url = `${this.leadershipScoreFormsUrl}/${id}/submit`;
    return this.httpClient.put<Response<LeadershipScoreForm>>(this.leadershipScoreFormsUrl, leadershipScoreForm).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<LeadershipScoreForm>>('submit leadership score form'))
    );
  }

  public getLeadershipScoreFormById(leadershipScoreForm: LeadershipScoreForm | number, callback: HasteCallback<LeadershipScoreForm>): Observable<Response<LeadershipScoreForm>> {
    const id = typeof leadershipScoreForm === 'number' ? leadershipScoreForm : leadershipScoreForm.id;
    const url = `${this.leadershipScoreFormsUrl}/${id}`;
    return this.httpClient.get<Response<LeadershipScoreForm>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<LeadershipScoreForm>>('get leadership score form by id'))
    );
  }

  public getLeadershipScoreFormsByEvaluator(evaluator: Evaluator | number, callback: HasteCallback<Array<LeadershipScoreForm>>): Observable<Response<Array<LeadershipScoreForm>>> {
    const evaluatorId = typeof evaluator === 'number' ? evaluator : evaluator.id;
    const url = `${this.evaluatorsUrl}/${evaluatorId}/leadershipScoreForms`;
    return this.httpClient.get<Response<Array<LeadershipScoreForm>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<LeadershipScoreForm>>>('get leadership score forms by id'))
    );
  }
}
