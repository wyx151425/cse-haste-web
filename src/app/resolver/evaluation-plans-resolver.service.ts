import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EvaluationPlanService} from '../service/evaluation-plan.service';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {EvaluationPlan} from '../model/evaluation-plan';
import {Response} from '../model/dto/response';

@Injectable({
  providedIn: 'root'
})
export class EvaluationPlansResolverService implements Resolve<Response<Array<EvaluationPlan>>> {

  constructor(private evaluationPlanService: EvaluationPlanService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<EvaluationPlan>>> | Promise<Response<Array<EvaluationPlan>>> | Response<Array<EvaluationPlan>> {
    return this.evaluationPlanService.getEvaluationPlans(null).pipe(
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
