import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CosonsolesRoutingModule } from './cosonsoles-routing.module';
import {ConsolesComponent} from "../../components/consoles/consoles.component";
import {ConsoleComponent} from "../../components/consoles/console/console.component";


@NgModule({
  declarations: [
    ConsolesComponent,
    ConsoleComponent,

  ],
  imports: [
    CommonModule,
    CosonsolesRoutingModule
  ]
})
export class CosonsolesModule { }
