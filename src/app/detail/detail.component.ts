import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MfDetail} from "../model/mf-detail";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() mfDetail: MfDetail;
  @Output() backToListEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  backToList() {
    this.backToListEvent.emit('dummy');
  }
}
