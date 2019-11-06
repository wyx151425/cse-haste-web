import {Injectable} from '@angular/core';
import {HasteCallback} from '../model/util/haste-callback';
import {Response} from '../model/dto/response';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HasteService} from '../model/util/haste-service';
import {ProfessionalScoreForm} from '../model/professional-score-form';
import {Evaluator} from '../model/evaluator';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalScoreFormService extends HasteService<ProfessionalScoreForm> {

  private professionalScoreFormsUrl = '/api/professionalScoreForms';
  private evaluatorsUrl = '/api/evaluators';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public updateProfessionalScoreForm(professionalScoreForm: ProfessionalScoreForm, callback: HasteCallback<ProfessionalScoreForm>): Observable<Response<ProfessionalScoreForm>> {
    return this.httpClient.put<Response<ProfessionalScoreForm>>(this.professionalScoreFormsUrl, professionalScoreForm).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<ProfessionalScoreForm>>('update professional score form'))
    );
  }

  public submitProfessionalScoreForm(professionalScoreForm: ProfessionalScoreForm, callback: HasteCallback<ProfessionalScoreForm>): Observable<Response<ProfessionalScoreForm>> {
    const url = `${this.professionalScoreFormsUrl}/submit`;
    return this.httpClient.put<Response<ProfessionalScoreForm>>(url, professionalScoreForm).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<ProfessionalScoreForm>>('submit professional score form'))
    );
  }

  public getProfessionalScoreFormById(professionalScoreForm: ProfessionalScoreForm | number, callback: HasteCallback<ProfessionalScoreForm>): Observable<Response<ProfessionalScoreForm>> {
    const id = typeof professionalScoreForm === 'number' ? professionalScoreForm : professionalScoreForm.id;
    const url = `${this.professionalScoreFormsUrl}/${id}`;
    return this.httpClient.get<Response<ProfessionalScoreForm>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<ProfessionalScoreForm>>('get professional score form by id'))
    );
  }

  public getProfessionalScoreFormsByEvaluator(evaluator: Evaluator | number, callback: HasteCallback<Array<ProfessionalScoreForm>>): Observable<Response<Array<ProfessionalScoreForm>>> {
    const evaluatorId = typeof evaluator === 'number' ? evaluator : evaluator.id;
    const url = `${this.evaluatorsUrl}/${evaluatorId}/professionalScoreForms`;
    return this.httpClient.get<Response<Array<ProfessionalScoreForm>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<ProfessionalScoreForm>>>('get professional score forms by id'))
    );
  }
}
