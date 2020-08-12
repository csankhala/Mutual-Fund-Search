import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MfService} from "../mf.service";
import {MfDetail} from "../model/mf-detail";
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  mfDetail: MfDetail;

  constructor(private route: ActivatedRoute,
              private mfService: MfService,
              private location: Location) { }

  ngOnInit() {
    let schemeCode = this.route.snapshot.params['schemeCode'];
    this.mfService.detail(schemeCode).subscribe(
      result=> this.mfDetail = result,
      error => console.error(error)
    );
  }
}
