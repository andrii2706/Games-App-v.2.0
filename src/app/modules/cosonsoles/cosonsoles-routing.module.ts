import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsolesComponent} from "../../components/consoles/consoles.component";

const routes: Routes = [
  {
    path: '',
    component: ConsolesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CosonsolesRoutingModule { }
