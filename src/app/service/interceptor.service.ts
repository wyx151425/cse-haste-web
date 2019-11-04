import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {mergeMap} from 'rxjs/operators';
import {UserService} from './user.service';
import {PromptService} from './prompt.service';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private userService: UserService,
    private promptService: PromptService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq: HttpRequest<any>;

    let user: User = this.userService.getLocalUser();

    if (null == user) {
      user = new User();
    }

    if (req.url.indexOf('login') > 0) {
      authReq = req.clone({headers: new HttpHeaders({'Content-Type': 'application/json'})});
    } else {
      if (req.url.indexOf('import') > 0 || req.url.indexOf('portrait') > 0) {
        authReq = req.clone({headers: new HttpHeaders({'token': user.token})});
      } else if (req.url.indexOf('export') > 0) {
        authReq = req.clone({
          headers: new HttpHeaders({'token': user.token}),
          responseType: 'blob'
        });
      } else {
        authReq = req.clone({
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'token': user.token
          })
        });
      }
    }

    return next.handle(authReq).pipe(mergeMap((event: any) => {
      if (event instanceof HttpResponse) {
        if (event.status !== 200) {
          this.promptService.pushError('服务器访问失败');
          return Observable.create(event);
        }
        if (1003 === event.body.statusCode) {
          this.router.navigate(['/login']);
        }
      }
      return Observable.create(observer => observer.next(event));
    }));
  }
}
