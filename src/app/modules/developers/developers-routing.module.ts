import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevelopersComponent} from "../../components/developers/developers.component";
import {DeveloperDetailsComponent} from "../../components/developers/developer/developer-details/developer-details.component";

const routes: Routes = [
  {
    path: '',
    component: DevelopersComponent,
  },
  {
    path: ':id',
    component:DeveloperDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersRoutingModule {
}
