import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import {DevelopersComponent} from "../../components/developers/developers.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgxPaginationModule} from "ngx-pagination";
import {DeveloperComponent} from "../../components/developers/developer/developer.component";


@NgModule({
  declarations: [
    DevelopersComponent,
    DeveloperComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ]
})
export class DevelopersModule { }
