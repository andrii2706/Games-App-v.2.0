import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GamesComponent} from "../../components/games/games.component";
import {GameComponent} from "../../components/games/game/game.component";
import {GameDetailsComponent} from "../../components/games/game-details/game-details.component";
import {GamesroutesModule} from "./gamesroutes/gamesroutes.module";



@NgModule({
  declarations: [
    GamesComponent,
    GameComponent,
    GameDetailsComponent
  ],
  imports: [
    GamesroutesModule
  ],
  exports:[]
})
export class GamesModule { }
