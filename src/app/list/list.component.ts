import {Component, OnInit} from '@angular/core';
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

  q: string;
  mfList: Observable<MfList[]>;

  constructor(private mfService: MfService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.q = this.route.snapshot.params['q'];
    this.mfList = this.mfService.search(this.q);
  }

  showDetails(schemeCode: number) {
    this.router.navigate(['detail', schemeCode]);
  }
}
