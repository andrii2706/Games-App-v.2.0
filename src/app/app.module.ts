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
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {SearchDialogWindowComponent} from "./components/search-dialog-window/search-dialog-window.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {UserAccountComponent} from "./components/user-account/user-account.component";
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/login/registration/registration.component';
import { ShowHidePasswordComponent } from './components/login/registration/show-hide-password/show-hide-password.component';
import {SuccessComponent} from "./components/login/notification/success/success.component";
import {ErrorComponent} from "./components/login/notification/error/error.component";
import { AuthComponent } from './components/login/auth/auth.component';
import {AuthGuard} from "./guards/auth.guard";
import {LogutGuard} from "./guards/logut.guard";

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
    path:'consoles',
    loadChildren: () => import('./modules/cosonsoles/cosonsoles.module').then(m=>m.CosonsolesModule)
  },
  {
    path: 'profile',
    component:UserAccountComponent,
    canActivate:[AuthGuard],
    canDeactivate:[LogutGuard],
    redirectTo: '/games'
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
        UserAccountComponent,
        LoginComponent,
        SuccessComponent,
        ErrorComponent,
        RegistrationComponent,
        ShowHidePasswordComponent,
        AuthComponent,
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
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
