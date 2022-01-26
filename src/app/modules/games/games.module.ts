import {NgModule} from '@angular/core';
import {GamesComponent} from "../../components/games/games.component";
import {GameComponent} from "../../components/games/game/game.component";
import {GameDetailsComponent} from "../../components/games/game-details/game-details.component";
import {GamesroutesModule} from "./gamesroutes/gamesroutes.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    GamesComponent,
    GameComponent,
    GameDetailsComponent,

  ],
  imports: [
    GamesroutesModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule
  ],

  exports: [],

})
export class GamesModule {
}
