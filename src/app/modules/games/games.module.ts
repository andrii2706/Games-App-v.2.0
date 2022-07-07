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
import {MatDividerModule} from "@angular/material/divider";
import {LoaderModule} from "../loader/loader.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
@NgModule({
  declarations: [
    GamesComponent,
    GameComponent,
    GameDetailsComponent,
    XboxComponent,
    PlayStationComponent,
    WindowsComponent,
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
    MatDividerModule,
    LoaderModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  exports: [

  ],

})
export class GamesModule {
}
