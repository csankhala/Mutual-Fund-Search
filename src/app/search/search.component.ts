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
    this.input.valueChanges.pipe(debounceTime(500), startWith('')).subscribe(
      term=>  {
          this.mfList = this.mfService.search(term);
      }
    );
  }

  submitQuery(q: string) {
    this.queryEvent.emit(q);
  }
}
