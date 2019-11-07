import { Injectable } from '@angular/core';
import {Evaluatee} from '../model/evaluatee';
import {mergeMap, take} from 'rxjs/operators';
import {Response} from '../model/dto/response';
import {EMPTY, Observable, of} from 'rxjs';
import {EvaluateeService} from '../service/evaluatee.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EvaluationPlanEvaluateesResolverService implements Resolve<Response<Array<Evaluatee>>> {

  constructor(private evaluateeService: EvaluateeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<Evaluatee>>> | Promise<Response<Array<Evaluatee>>> | Response<Array<Evaluatee>> {
    const evaluationPlanId: number = Number(route.params['evaluationPlanId']);
    return this.evaluateeService.getEvaluateesByEvaluationPlan(evaluationPlanId, null).pipe(
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
