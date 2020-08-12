import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch:'full'},
  {path:'list', component:ListComponent},
  {path:'list/:q', component:ListComponent},
  {path:'detail/:schemeCode', component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
