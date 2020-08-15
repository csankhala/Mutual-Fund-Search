import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() queryEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submitQuery(q: string) {
    this.queryEvent.emit(q);
  }
}
