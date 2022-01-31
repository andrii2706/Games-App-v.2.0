import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IGamesDetails} from "../../../interfaces/Igames";
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../../../services/games.service";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  @ViewChild('description')
  gameDescription: ElementRef
  @Input()
  gameDetails: IGamesDetails

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService:GamesService
  ) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.gamesService.getGameById(id).subscribe(value => this.gameDetails = value)
    })
  }

  ngOnInit(): void {

  }


}
