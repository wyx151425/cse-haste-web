import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-user-password-update-modal',
  templateUrl: './user-password-update-modal.component.html',
  styleUrls: ['./user-password-update-modal.component.css']
})
export class UserPasswordUpdateModalComponent implements OnInit, HasteCallback<User> {

  private isBtnDisabled = false;
  private newPassword: string;
  private user: User;

  constructor(private userService: UserService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
    this.modalService.updateUserPasswordObservable.subscribe((user: User) => {
      this.user = user;
    });
  }

  public updateUserPassword(): void {
    if (null === this.newPassword || '' === this.newPassword) {
      this.promptService.pushWarning('请填写新密码');
      return;
    }
    if (this.newPassword.length < 6 || this.newPassword.length > 32) {
      this.promptService.pushWarning('密码的长度应在6-32位之间');
      return;
    }
    this.isBtnDisabled = true;
    const user: User = new User();
    user.id = this.user.id;
    user.password = this.newPassword;
    this.userService.updateUserPassword(user, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(object: User): void {
    this.promptService.pushSuccess('更新成功');
    this.user.password = object.password;
    this.modalService.dismissUpdateUserPasswordModal();
    this.isBtnDisabled = false;
  }
}
