import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";


const routes: Routes = [
  {path:'', redirectTo:'search', pathMatch:'full'},
  {path:'search', component:ListComponent, runGuardsAndResolvers: "always"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
