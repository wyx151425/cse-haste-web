import {Injectable} from '@angular/core';
import {mergeMap, take} from 'rxjs/operators';
import {Response} from '../model/dto/response';
import {EMPTY, Observable, of} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DepartmentCadreScoreFormService} from '../service/department-cadre-score-form.service';
import {DepartmentCadreScoreForm} from '../model/department-cadre-score-form';

@Injectable({
  providedIn: 'root'
})
export class DepartmentCadreScoreFormResolverService implements Resolve<Response<DepartmentCadreScoreForm>> {

  constructor(private departmentCadreScoreFormService: DepartmentCadreScoreFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<DepartmentCadreScoreForm>> | Promise<Response<DepartmentCadreScoreForm>> | Response<DepartmentCadreScoreForm> {
    const departmentCadreScoreFormId: number = Number(route.params['departmentCadreScoreFormId']);
    return this.departmentCadreScoreFormService.getDepartmentCadreScoreFormById(departmentCadreScoreFormId, null).pipe(
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
