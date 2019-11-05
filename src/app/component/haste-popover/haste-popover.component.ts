import { Component, OnInit } from '@angular/core';
import {PromptService} from '../../service/prompt.service';

@Component({
  selector: 'app-haste-popover',
  templateUrl: './haste-popover.component.html',
  styleUrls: ['./haste-popover.component.css']
})
export class HastePopoverComponent implements OnInit {

  constructor(public promptService: PromptService) {
  }

  ngOnInit() {
  }

}
