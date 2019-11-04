import {Injectable} from '@angular/core';
import {HasteService} from '../model/util/haste-service';
import {LeaderCadreScoreForm} from '../model/leader-cadre-score-form';
import {HasteCallback} from '../model/util/haste-callback';
import {Observable} from 'rxjs';
import {Response} from '../model/dto/response';
import {catchError, tap} from 'rxjs/operators';
import {Evaluator} from '../model/evaluator';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaderCadreScoreFormService extends HasteService<LeaderCadreScoreForm> {

  private leaderCadreScoreFormsUrl = '/api/leaderCadreScoreForms';
  private evaluatorsUrl = '/api/evaluators';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public submitLeaderCadreScoreForm(leaderCadreScoreForm: LeaderCadreScoreForm | number, callback: HasteCallback<LeaderCadreScoreForm>): Observable<Response<LeaderCadreScoreForm>> {
    const id = typeof leaderCadreScoreForm === 'number' ? leaderCadreScoreForm : leaderCadreScoreForm.id;
    const url = `${this.leaderCadreScoreFormsUrl}/${id}/submit`;
    return this.httpClient.put<Response<LeaderCadreScoreForm>>(this.leaderCadreScoreFormsUrl, leaderCadreScoreForm).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<LeaderCadreScoreForm>>('submit leader cadre score form'))
    );
  }

  public getLeaderCadreScoreFormById(leaderCadreScoreForm: LeaderCadreScoreForm | number, callback: HasteCallback<LeaderCadreScoreForm>): Observable<Response<LeaderCadreScoreForm>> {
    const id = typeof leaderCadreScoreForm === 'number' ? leaderCadreScoreForm : leaderCadreScoreForm.id;
    const url = `${this.leaderCadreScoreFormsUrl}/${id}`;
    return this.httpClient.get<Response<LeaderCadreScoreForm>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<LeaderCadreScoreForm>>('get leader cadre score form by id'))
    );
  }

  public getLeaderCadreScoreFormsByEvaluator(evaluator: Evaluator | number, callback: HasteCallback<Array<LeaderCadreScoreForm>>): Observable<Response<Array<LeaderCadreScoreForm>>> {
    const evaluatorId = typeof evaluator === 'number' ? evaluator : evaluator.id;
    const url = `${this.evaluatorsUrl}/${evaluatorId}/leaderCadreScoreForms`;
    return this.httpClient.get<Response<Array<LeaderCadreScoreForm>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<LeaderCadreScoreForm>>>('get leader cadre score forms by id'))
    );
  }
}
