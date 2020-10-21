import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MfDetail} from "../model/mf-detail";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() mfDetail: MfDetail;
  @Output() backToListEvent = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  backToList() {
    this.backToListEvent.emit('dummy');
  }
}
