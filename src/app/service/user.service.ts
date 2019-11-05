import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {HasteService} from '../model/util/haste-service';
import {HasteCallback} from '../model/util/haste-callback';
import {catchError, tap} from 'rxjs/operators';
import {Response} from '../model/dto/response';
import {EvaluationScoreForm} from '../model/evaluation-score-form';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HasteService<User | EvaluationScoreForm> {

  private usersUrl = '/api/users';

  private userSource = new Subject();
  public userObservable = this.userSource.asObservable();

  constructor(private httpClient: HttpClient) {
    super();
  }

  public setLocalUser(user: User) {
    this.userSource.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getLocalUser(): User {
    const userStr = localStorage.getItem('user');
    if (null == userStr) {
      return null;
    } else {
      return JSON.parse(userStr);
    }
  }

  public removeLocalUser(): void {
    localStorage.removeItem('user');
    this.userSource.next(null);
  }

  public login(user: User, callback: HasteCallback<User>): Observable<Response<User>> {
    const url = `${this.usersUrl}/login`;
    return this.httpClient.post<Response<User>>(url, user).pipe(
      tap((response: Response<User>) => {
        if (200 === response.statusCode) {
          this.setLocalUser(response.data);
        }
        this.handleResponse(response, callback);
      }),
      catchError(this.handleError<Response<User>>('user login'))
    );
  }

  public logout(callback: HasteCallback<User>): Observable<Response<User>> {
    const url = `${this.usersUrl}/logout`;
    return this.httpClient.post<Response<User>>(url, null).pipe(
      tap((response: Response<User>) => {
        if (200 === response.statusCode || 1003 === response.statusCode) {
          this.removeLocalUser();
        }
        this.handleResponse(response, callback);
      }),
      catchError(this.handleError<Response<User>>('user logout'))
    );
  }

  public importUsers(param: FormData, callback: HasteCallback<Array<User>>): Observable<Response<Array<User>>> {
    const url = `${this.usersUrl}/import`;
    return this.httpClient.post<Response<Array<User>>>(url, param).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<User>>>('import users by file'))
    );
  }

  public disableUser(user: User | number, callback: HasteCallback<User>): Observable<Response<User>> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}/disable`;
    return this.httpClient.delete<Response<User>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<User>>('disable user by id'))
    );
  }

  public getEvaluationScoreFormsByUser(userId: number, callback: HasteCallback<Array<EvaluationScoreForm>>): Observable<Response<Array<EvaluationScoreForm>>> {
    const url = `${this.usersUrl}/${userId}/evaluationScoreForms`;
    return this.httpClient.get<Response<Array<EvaluationScoreForm>>>(url).pipe(
      tap(response => this.handleResponse(response, callback)),
      catchError(this.handleError<Response<Array<EvaluationScoreForm>>>('get evaluation score forms by id'))
    );
  }
}
