import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IGamesDetails, IScreenShots} from "../../../interfaces/Igames";
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../../../services/games.service";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent implements OnInit {
  //*TODO fix: fing solution for this how to make it in proper way with out this thing
  screenShots: [{ id: number; image: string; is_deleted: boolean }]

  tabs:['ScreenShots', 'Videos', 'DLS', 'Trailer', 'Youtube videos about games']
  @ViewChild('description')
  gameDescription: ElementRef
  @Input()
  gameDetails: IGamesDetails


  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.gamesService.getGameById(id).subscribe(value => this.gameDetails = value)
      this.gamesService.getGameScreenShots(id).subscribe(value => {
        this.screenShots = value.results
      })
    })
  }

  ngOnInit(): void {

  }

}
