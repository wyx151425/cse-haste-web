import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';

@Component({
  selector: 'app-haste-footer',
  templateUrl: './haste-footer.component.html',
  styleUrls: ['./haste-footer.component.css']
})
export class HasteFooterComponent implements OnInit {

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }

}
