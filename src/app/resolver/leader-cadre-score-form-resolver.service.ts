import {Injectable} from '@angular/core';
import {Response} from '../model/dto/response';
import {EvaluatorService} from '../service/evaluator.service';
import {mergeMap, take} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Evaluator} from '../model/evaluator';
import {LeaderCadreScoreForm} from '../model/leader-cadre-score-form';
import {LeaderCadreScoreFormService} from '../service/leader-cadre-score-form.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderCadreScoreFormResolverService implements Resolve<Response<LeaderCadreScoreForm>> {

  constructor(private leaderCadreScoreFormService: LeaderCadreScoreFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<LeaderCadreScoreForm>> | Promise<Response<LeaderCadreScoreForm>> | Response<LeaderCadreScoreForm> {
    const leaderCadreScoreFormId: number = Number(route.params['leaderCadreScoreFormId']);
    return this.leaderCadreScoreFormService.getLeaderCadreScoreFormById(leaderCadreScoreFormId, null).pipe(
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
