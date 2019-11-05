import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Response} from '../model/dto/response';
import {EvaluationScoreForm} from '../model/evaluation-score-form';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {UserService} from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluatorScoreFormsResolverService implements Resolve<Response<Array<EvaluationScoreForm>>> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<EvaluationScoreForm>>> | Promise<Response<Array<EvaluationScoreForm>>> | Response<Array<EvaluationScoreForm>> {
    const userId: number = Number(route.params['userId']);
    return this.userService.getEvaluationScoreFormsByUser(userId, null).pipe(
      take(1),
      mergeMap(response => {
        if (response) {
          return of(response);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
