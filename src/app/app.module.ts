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
import {SearchDialogWindowComponent} from "./components/search-dialog-window/search-dialog-window.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {UserAccountComponent} from "./components/user-account/user-account.component";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games.module').then(m=>m.GamesModule)
  },
  {
    path:'developers',
    loadChildren: () => import('./modules/developers/developers.module').then(m=>m.DevelopersModule)
  },
  {
    path: 'user',
    component:UserAccountComponent
  }

]


@NgModule({
    declarations: [
        AppComponent,
        WrapComponent,
        HomeComponent,
        SearchDialogWindowComponent,
        FooterComponent,
        LinkedinIconComponent,
        GitIconComponent,
        PipePipe,
        UserAccountComponent,
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
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
