import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {MfList} from "../model/mf-list";
import {MfService} from "../mf.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  mfList: Observable<MfList[]>;
  searchTerm: string;
  enable: boolean = true;
  @Output() showDetailEvent= new EventEmitter();

  constructor(private mfService: MfService) { }

  ngOnInit() {
  }

  showDetails(schemeCode: number) {
    this.mfService.detail(schemeCode).subscribe(
      result=> {
        this.showDetailEvent.emit(result);
        this.enable = false;
      },
      error => console.error(error)
    );
  }

  list(searchTerm: string) {
    this.mfList = this.mfService.search(searchTerm);
    this.searchTerm = searchTerm;
  }
}
