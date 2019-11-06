import {Injectable} from '@angular/core';
import {Response} from '../model/dto/response';
import {mergeMap, take} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LeadershipScoreFormService} from '../service/leadership-score-form.service';
import {LeadershipScoreForm} from '../model/leadership-score-form';
import {ProfessionalScoreFormService} from '../service/professional-score-form.service';
import {ProfessionalScoreForm} from '../model/professional-score-form';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalScoreFormResolverService implements Resolve<Response<ProfessionalScoreForm>> {

  constructor(private professionalScoreFormService: ProfessionalScoreFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<ProfessionalScoreForm>> | Promise<Response<ProfessionalScoreForm>> | Response<ProfessionalScoreForm> {
    const professionalScoreFormId: number = Number(route.params['professionalScoreFormId']);
    return this.professionalScoreFormService.getProfessionalScoreFormById(professionalScoreFormId, null).pipe(
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
