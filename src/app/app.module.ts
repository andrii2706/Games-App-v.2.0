import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WrapComponent} from './components/wrap/wrap.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {HomeComponent} from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinkedinIconComponent } from './components/icons/linkedin-icon/linkedin-icon.component';
import { GitIconComponent } from './components/icons/git-icon/git-icon.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipePipe } from './pipes/pipe.pipe';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games.module').then(m=>m.GamesModule)
  }

]


@NgModule({
  declarations: [
    AppComponent,
    WrapComponent,
    HomeComponent,
    FooterComponent,
    LinkedinIconComponent,
    GitIconComponent,
    PipePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
