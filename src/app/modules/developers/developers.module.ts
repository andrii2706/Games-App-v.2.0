import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersRoutingModule } from './developers-routing.module';
import {DevelopersComponent} from "../../components/developers/developers.component";
import {DeveloperComponent} from "../../components/developers/developer/developer.component";
import {DeveloperDetailsComponent} from "../../components/developers/developer/developer-details/developer-details.component";

import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgxPaginationModule} from "ngx-pagination";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    DevelopersComponent,
    DeveloperComponent,
    DeveloperDetailsComponent
  ],
    imports: [
        CommonModule,
        DevelopersRoutingModule,
        MatProgressSpinnerModule,
        NgxPaginationModule,
        MatIconModule
    ]
})
export class DevelopersModule { }
