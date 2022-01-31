import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GamesComponent} from "../../../components/games/games.component";
import {GameDetailsComponent} from "../../../components/games/game-details/game-details.component";

const routes: Routes=[
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: ':id',
    component:GameDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class GamesroutesModule { }
