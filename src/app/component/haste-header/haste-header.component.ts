import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {HasteCallback} from '../../model/util/haste-callback';
import {PromptService} from '../../service/prompt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-haste-header',
  templateUrl: './haste-header.component.html',
  styleUrls: ['./haste-header.component.css']
})
export class HasteHeaderComponent implements OnInit, HasteCallback<User> {

  private user: User;

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private promptService: PromptService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.user = this.userService.getLocalUser();
    this.userService.userObservable.subscribe((user: User) => {
      this.user = user;
    });
  }

  public logout(): void {
    this.userService.logout(this).subscribe();
  }

  onSuccess(object: User): void {
    this.router.navigate(['/login']);
  }

  onError(message: string): void {
    this.promptService.pushError(message);
  }
}
