import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {User} from '../../model/user';
import {PromptService} from '../../service/prompt.service';
import {UserService} from '../../service/user.service';
import {HasteCallback} from '../../model/util/haste-callback';
import {Router} from '@angular/router';

@Component({
  selector: 'app-haste-user-login',
  templateUrl: './haste-user-login.component.html',
  styleUrls: ['./haste-user-login.component.css']
})
export class HasteUserLoginComponent implements OnInit, OnDestroy, HasteCallback<User> {

  private user: User;
  private isLoginBtnDisabled = false;

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private promptService: PromptService,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.modalService.dismissHeaderComponent();
    this.modalService.dismissFooterComponent();
  }

  ngOnDestroy() {
    this.modalService.showHeaderComponent();
    this.modalService.showFooterComponent();
  }

  public login(): void {
    if (null == this.user.username || '' === this.user.username) {
      this.promptService.pushWarning('请填写用户名');
      return;
    }
    if (null == this.user.password || '' === this.user.password) {
      this.promptService.pushWarning('请填写登录密码');
      return;
    }
    this.isLoginBtnDisabled = true;
    this.userService.login(this.user, this).subscribe();
  }

  onSuccess(user: User): void {
    this.promptService.pushSuccess('登录成功');
    if ('ROLE_USER' === user.role) {
      this.router.navigate(['/user/' + user.id + '/evaluationScoreForm/list']);
    } else if ('ROLE_ADMIN' === user.role) {
      this.router.navigate(['/evaluationPlan/list']);
    } else {
      this.promptService.pushError('系统尚未对您开放');
    }
    this.isLoginBtnDisabled = false;
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isLoginBtnDisabled = false;
  }
}
