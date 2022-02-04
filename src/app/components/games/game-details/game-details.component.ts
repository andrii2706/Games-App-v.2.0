import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IGamesDetails, IGameTrailer, IGameTrailers, IScreenShots} from "../../../interfaces/Igames";
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../../../services/games.service";
import {IAchivments} from "../../../interfaces/IAchivments";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent implements OnInit {
  //*TODO fix: fing solution for this how to make it in proper way with out this thing
  screenShots: [{ id: number; image: string; is_deleted: boolean }]
  videos: [{ id: number; name: string; preview: string; date: { 480: string, max: string } }]
  // achievements :IAchivments[]
  // page :1
  // tabs: ['ScreenShots', 'Videos', 'DLS', 'Trailer', 'Youtube videos about games']
  @ViewChild('description')
  gameDescription: ElementRef
  @Input()
  gameDetails: IGamesDetails


  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.gamesService.getGameById(id).subscribe(value =>  console.log(this.gameDetails = value))

      this.gamesService.getGameScreenShots(id).subscribe(value => {
        this.screenShots = value.results
      })
      this.gamesService.getGameTrailers(id).subscribe(value => {
        this.videos = value.results
      })
    })
  }

  ngOnInit(): void {
  }

}
