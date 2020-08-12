import { Component, OnInit } from '@angular/core';
import {MfService} from "../mf.service";
import {Observable} from "rxjs";
import {MfList} from "../model/mf-list";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  q: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(): void {
    this.router.navigate(['list', this.q]);
    this.q = null;
  }
}
