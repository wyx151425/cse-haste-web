import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageInfo} from '../../model/util/page-info';
import {PromptService} from '../../service/prompt.service';

@Component({
  selector: 'app-haste-pagination',
  templateUrl: './haste-pagination.component.html',
  styleUrls: ['./haste-pagination.component.css']
})
export class HastePaginationComponent implements OnInit {

  private pageNum: number = null;

  @Input()
  private pageInfo: PageInfo<any>;

  @Output()
  private emitter: EventEmitter<number>;

  constructor(private promptService: PromptService) {
    this.emitter = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  private queryPreviousPage(): void {
    this.emitter.emit(this.pageInfo.pageNum - 1);
  }

  private queryNextPage(): void {
    this.emitter.emit(this.pageInfo.pageNum + 1);
  }

  private queryByPagination(): void {
    if (null === this.pageNum) {
      this.promptService.pushWarning('请填写查询页码');
      return;
    }
    if (this.pageNum <= 0 || this.pageNum > this.pageInfo.pages) {
      this.promptService.pushWarning('超出数据可查询范围');
      return;
    }
    this.emitter.emit(this.pageNum);
  }
}
