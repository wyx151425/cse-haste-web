import {Injectable} from '@angular/core';
import {mergeMap, take} from 'rxjs/operators';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {Response} from '../model/dto/response';
import {EvaluationGroupService} from '../service/evaluation-group.service';
import {EvaluationGroup} from '../model/evaluation-group';

@Injectable({
  providedIn: 'root'
})
export class EvaluationGroupsResolverService implements Resolve<Response<Array<EvaluationGroup>>> {

  constructor(private evaluationGroupService: EvaluationGroupService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<EvaluationGroup>>> | Promise<Response<Array<EvaluationGroup>>> | Response<Array<EvaluationGroup>> {
    const evaluationPlanId: number = route.params['evaluationPlanId'];
    return this.evaluationGroupService.getEvaluationGroupsByEvaluationPlan(evaluationPlanId, null).pipe(
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
