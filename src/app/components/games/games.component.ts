import { Component, OnInit } from '@angular/core';
import {IGame, IGames} from "../../interfaces/Igames";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: IGame[]
  page:number
  items: IGames
  events: string[] = [];
  opened: boolean;

  constructor(
    private gamesService:GamesService
  ) { }

  ngOnInit(): void {
    this.getPaginationandGames(1);
    this.getTotalItem();
  }
  getPaginationandGames(Newpage:number){
  this.gamesService.getGames(Newpage).subscribe(value => {this.games = value.results})
  }
  navigateTo(Newpage: number){
    this.page = Newpage,
      this.getPaginationandGames(Newpage)
  }
  getTotalItem():void{
    this.gamesService.getTotalItem().subscribe(value => this.items = value)
  }
}
