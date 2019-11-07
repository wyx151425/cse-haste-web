import {Injectable} from '@angular/core';
import {mergeMap, take} from 'rxjs/operators';
import {Response} from '../model/dto/response';
import {EMPTY, Observable, of} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EvaluationScoreForm} from '../model/evaluation-score-form';
import {EvaluationScoreFormService} from '../service/evaluation-score-form.service';

@Injectable({
  providedIn: 'root'
})
export class GroupScoreFormsResolverService implements Resolve<Response<Array<EvaluationScoreForm>>> {

  constructor(private evaluationScoreFormService: EvaluationScoreFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<Array<EvaluationScoreForm>>> | Promise<Response<Array<EvaluationScoreForm>>> | Response<Array<EvaluationScoreForm>> {
    const evaluationGroupId: number = Number(route.params['evaluationGroupId']);
    return this.evaluationScoreFormService.getEvaluationScoreFormsByEvaluationGroupId(evaluationGroupId, null).pipe(
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
