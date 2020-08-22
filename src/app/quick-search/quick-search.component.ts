import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  mfHouses = ['SBI', 'HDFC', 'AXIS', 'IDFC', 'UTI', 'FRANKLIN', 'DSP']
  @Output() queryEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submitQuery(q: string) {
    this.queryEvent.emit(q);
  }
}
