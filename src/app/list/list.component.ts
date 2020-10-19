import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Observable} from "rxjs";
import {MfList} from "../model/mf-list";
import {MfService} from "../mf.service";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  mfList: Observable<MfList[]>;
  @Input() searchTerm: string;
  enable: boolean = true;
  @Output() showDetailEvent= new EventEmitter();
  @BlockUI() blockUI: NgBlockUI;

  constructor(private mfService: MfService) { }

  ngOnInit() {
  }

  showDetails(schemeCode: number) {
    this.blockUI.start();
    this.mfService.detail(schemeCode).subscribe(
      result=> {
        this.showDetailEvent.emit(result);
        this.enable = false;
        this.blockUI.stop();
      },
      error => console.error(error)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.searchTerm || !changes.searchTerm.currentValue) {
      return;
    }
    this.list(changes.searchTerm.currentValue);
  }

  list(searchTerm: string) {
    this.mfList = this.mfService.search(searchTerm);
  }
}
