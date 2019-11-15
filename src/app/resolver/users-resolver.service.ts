import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Response} from '../model/dto/response';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {PageInfo} from '../model/util/page-info';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<Response<PageInfo<User>>> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response<PageInfo<User>>> | Promise<Response<PageInfo<User>>> | Response<PageInfo<User>> {
    return this.userService.getUsers(1, null).pipe(
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
