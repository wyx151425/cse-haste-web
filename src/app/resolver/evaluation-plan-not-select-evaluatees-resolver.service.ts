import {Injectable} from '@angular/core';
import {mergeMap, take} from 'rxjs/operators';
import {Response} from '../model/dto/response';
import {EMPTY, Observable, of} from 'rxjs';
import {EvaluateeService} from '../service/evaluatee.service';
import {User} from '../model/user';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EvaluationPlanNotSelectEvaluateesResolverService implements Resolve<Response<Array<User>>> {

  constructor(private evaluateeService: EvaluateeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<User>>> | Promise<Response<Array<User>>> | Response<Array<User>> {
    const evaluationPlanId: number = Number(route.params['evaluationPlanId']);
    return this.evaluateeService.getNotSelectEvaluateesByEvaluationPlan(evaluationPlanId, null).pipe(
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
