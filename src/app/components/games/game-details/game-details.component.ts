import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IGamesDetails} from "../../../interfaces/Igames";
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../../../services/games.service";
import {IAchivments} from "../../../interfaces/IAchivments";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent implements OnInit {
  screenShots: [{ id: number; image: string; is_deleted: boolean }]
  videos: [{ id: number; name: string; preview: string; date: { 480: string, max: string } }]
  achievements: [{ id: number; name: string; description: string; image: string; percent: string }]

  @ViewChild('description')
  gameDescription: ElementRef
  @Input()
  gameDetails: IGamesDetails


  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.gamesService.getGameById(id).subscribe(value => {
        this.gameDetails = value
      })
      this.gamesService.getGameScreenShots(id).subscribe(value => {
        this.screenShots = value.results
      })
      this.gamesService.getGameTrailers(id).subscribe(value => {
        this.videos = value.results
      })
      this.gamesService.getTheAchivements(id).subscribe(value => {
        this.achievements = value.results
      })
    })
  }

  ngOnInit(): void {
  }

  backButton() {
    history.back()
  }

}
