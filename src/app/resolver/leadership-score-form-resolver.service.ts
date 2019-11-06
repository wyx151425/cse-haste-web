import {Injectable} from '@angular/core';
import {Response} from '../model/dto/response';
import {mergeMap, take} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {LeaderCadreScoreFormService} from '../service/leader-cadre-score-form.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LeaderCadreScoreForm} from '../model/leader-cadre-score-form';
import {LeadershipScoreForm} from '../model/leadership-score-form';
import {LeadershipScoreFormService} from '../service/leadership-score-form.service';

@Injectable({
  providedIn: 'root'
})
export class LeadershipScoreFormResolverService implements Resolve<Response<LeadershipScoreForm>> {

  constructor(private leadershipScoreFormService: LeadershipScoreFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<LeadershipScoreForm>> | Promise<Response<LeadershipScoreForm>> | Response<LeadershipScoreForm> {
    const leadershipScoreFormId: number = Number(route.params['leadershipScoreFormId']);
    return this.leadershipScoreFormService.getLeadershipScoreFormById(leadershipScoreFormId, null).pipe(
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
