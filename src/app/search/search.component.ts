import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MfService} from "../mf.service";
import {Observable} from 'rxjs';
import {debounceTime, startWith} from "rxjs/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() queryEvent = new EventEmitter<string>();
  mfList: Observable<any>;
  input : FormControl = new FormControl();

  constructor(private mfService: MfService) { }

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
