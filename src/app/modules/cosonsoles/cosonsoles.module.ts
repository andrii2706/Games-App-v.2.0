import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CosonsolesRoutingModule } from './cosonsoles-routing.module';
import {ConsolesComponent} from "../../components/consoles/consoles.component";
import {ConsoleComponent} from "../../components/consoles/console/console.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    ConsolesComponent,
    ConsoleComponent,

  ],
  imports: [
    CommonModule,
    CosonsolesRoutingModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ]
})
export class CosonsolesModule { }
