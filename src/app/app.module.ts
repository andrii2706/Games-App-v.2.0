import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WrapComponent} from './components/wrap/wrap.component';
import {GamesComponent} from './components/games/games.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {HomeComponent} from './components/home/home.component';
import { GameComponent } from './components/games/game/game.component';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';
import { FooterComponent } from './components/footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
