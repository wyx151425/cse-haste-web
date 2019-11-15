import {Component, OnInit} from '@angular/core';
import {Response} from '../../model/dto/response';
import {DepartmentCadreScoreForm} from '../../model/department-cadre-score-form';
import {HasteService} from '../../model/util/haste-service';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../service/modal.service';
import {PromptService} from '../../service/prompt.service';
import {User} from '../../model/user';
import {PageInfo} from '../../model/util/page-info';
import {UserService} from '../../service/user.service';
import {HasteCallback} from '../../model/util/haste-callback';

@Component({
  selector: 'app-user-manage-list',
  templateUrl: './user-manage-list.component.html',
  styleUrls: ['./user-manage-list.component.css']
})
export class UserManageListComponent implements OnInit, HasteCallback<PageInfo<User>> {

  private users: Array<User>;
  private pageInfo: PageInfo<User>;

  constructor(private userService: UserService, private modalService: ModalService, private promptService: PromptService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { response: Response<PageInfo<User>> }) => {
      if (200 === data.response.statusCode) {
        this.pageInfo = data.response.data;
        this.users = data.response.data.list;
      } else {
        this.promptService.pushError(HasteService.getMessage(data.response.statusCode));
      }
    });
  }

  public getUsers(pageNum: number): void {
    this.userService.getUsers(pageNum, this).subscribe();
  }

  onError(message: string): void {
    this.promptService.pushError(message);
  }

  onSuccess(object: PageInfo<User>): void {
    this.pageInfo = object;
    this.users = this.pageInfo.list;
  }
}
