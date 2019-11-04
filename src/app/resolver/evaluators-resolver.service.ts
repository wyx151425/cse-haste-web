import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {Response} from '../model/dto/response';
import {EvaluatorService} from '../service/evaluator.service';
import {Evaluator} from '../model/evaluator';

@Injectable({
  providedIn: 'root'
})
export class EvaluatorsResolverService implements Resolve<Response<Array<Evaluator>>> {

  constructor(private evaluatorService: EvaluatorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<Evaluator>>> | Promise<Response<Array<Evaluator>>> | Response<Array<Evaluator>> {
    const evaluationGroupId: number = route.params['evaluationGroupId'];
    return this.evaluatorService.getEvaluatorsByEvaluationGroup(evaluationGroupId, null).pipe(
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
