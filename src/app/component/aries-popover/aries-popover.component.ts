import { Component, OnInit } from '@angular/core';
import {PromptService} from '../../service/prompt.service';

@Component({
  selector: 'app-aries-popover',
  templateUrl: './aries-popover.component.html',
  styleUrls: ['./aries-popover.component.css']
})
export class AriesPopoverComponent implements OnInit {

  constructor(public promptService: PromptService) {
  }

  ngOnInit() {
  }

}
