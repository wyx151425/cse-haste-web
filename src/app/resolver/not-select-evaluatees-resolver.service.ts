import {Injectable} from '@angular/core';
import {mergeMap, take} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Response} from '../model/dto/response';
import {User} from '../model/user';
import {EvaluateeService} from '../service/evaluatee.service';

@Injectable({
  providedIn: 'root'
})
export class NotSelectEvaluateesResolverService implements Resolve<Response<Array<User>>> {

  constructor(private evaluateeService: EvaluateeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<User>>> | Promise<Response<Array<User>>> | Response<Array<User>> {
    const evaluationGroupId: number = Number(route.params['evaluationGroupId']);
    return this.evaluateeService.getNotSelectEvaluateesByEvaluationGroup(evaluationGroupId, null).pipe(
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
