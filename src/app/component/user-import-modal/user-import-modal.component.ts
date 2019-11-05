import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {HasteCallback} from '../../model/util/haste-callback';
import {UserService} from '../../service/user.service';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';

@Component({
  selector: 'app-user-import-modal',
  templateUrl: './user-import-modal.component.html',
  styleUrls: ['./user-import-modal.component.css']
})
export class UserImportModalComponent implements OnInit, HasteCallback<Array<User>> {

  private isBtnDisabled = false;
  private file: any;

  constructor(private userService: UserService, private modalService: ModalService, private promptService: PromptService) {
  }

  ngOnInit() {
  }

  public selectFile(event: any): void {
    this.file = event.target;
  }

  public importUsers(): void {
    if (null == this.file) {
      this.promptService.pushWarning('请选择文件');
      return;
    }
    this.isBtnDisabled = true;
    const param = new FormData();
    param.append('file', this.file.files[0], this.file.files[0].name);
    this.userService.importUsers(param, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
    this.isBtnDisabled = false;
  }

  onSuccess(users: Array<User>): void {
    this.promptService.pushSuccess('导入成功');
    this.modalService.dismissImportUserModal();
    this.isBtnDisabled = false;
  }
}
