import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {QuickSearchComponent} from './quick-search/quick-search.component';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    DetailComponent,
    QuickSearchComponent
  ],
  imports: [
    NgbModalModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    DetailComponent
  ],
  entryComponents: [
    DetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
