import {NgModule} from '@angular/core';
import {GamesComponent} from "../../components/games/games.component";
import {GameComponent} from "../../components/games/game/game.component";
import {GameDetailsComponent} from "../../components/games/game-details/game-details.component";
import {GamesroutesModule} from "./gamesroutes/gamesroutes.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from "@angular/material/card";
import {XboxComponent} from "../../components/icons/xbox/xbox.component";
import {PlayStationComponent} from "../../components/icons/play-station/play-station.component";
import {WindowsComponent} from "../../components/icons/windows/windows.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
@NgModule({
  declarations: [
    GamesComponent,
    GameComponent,
    GameDetailsComponent,
    XboxComponent,
    PlayStationComponent,
    WindowsComponent
  ],
  imports: [
    GamesroutesModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    NgbModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
  ],

  exports: [],

})
export class GamesModule {
}
