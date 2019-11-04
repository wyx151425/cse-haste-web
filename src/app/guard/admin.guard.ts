import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../service/user.service';
import {PromptService} from '../service/prompt.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private promptService: PromptService,
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.userService.getLocalUser();
    if (null != user && 'ROLE_ADMIN' === user.role) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
