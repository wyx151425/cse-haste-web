import {Component, Input, OnInit} from '@angular/core';
import {Evaluatee} from '../../model/evaluatee';

@Component({
  selector: 'app-aries-group-candidates',
  templateUrl: './aries-group-candidates.component.html',
  styleUrls: ['./aries-group-candidates.component.css']
})
export class AriesGroupCandidatesComponent implements OnInit {

  @Input()
  private candidates: Array<Evaluatee>;

  constructor() { }

  ngOnInit() {
  }

}
