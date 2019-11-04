import {Injectable} from '@angular/core';
import {Response} from '../model/dto/response';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {mergeMap, take} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {EvaluateeService} from '../service/evaluatee.service';
import {Evaluatee} from '../model/evaluatee';

@Injectable({
  providedIn: 'root'
})
export class EvaluateesResolverService implements Resolve<Response<Array<Evaluatee>>> {

  constructor(private evaluateeService: EvaluateeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<Evaluatee>>> | Promise<Response<Array<Evaluatee>>> | Response<Array<Evaluatee>> {
    const evaluationGroupId: number = route.params['evaluationGroupId'];
    return this.evaluateeService.getEvaluateesByEvaluationGroup(evaluationGroupId, null).pipe(
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
