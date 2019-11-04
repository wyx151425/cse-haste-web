import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';

@Component({
  selector: 'app-aries-footer',
  templateUrl: './aries-footer.component.html',
  styleUrls: ['./aries-footer.component.css']
})
export class AriesFooterComponent implements OnInit {

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }

}
