import {Component, OnInit} from '@angular/core';
import {IGame, IGames} from "../../interfaces/Igames";
import {GamesService} from "../../services/games.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public searchInput: FormGroup
  games: IGame[]
  page: number
  items: IGames
  events: string[] = [];
  opened: boolean;
  showFormInTemplate = false;

  constructor(
    private gamesService: GamesService,
     ) {}

  ngOnInit(): void {
    this.searchInput =  new FormGroup({
      query : new FormControl('')
    })
    this.getPaginationandGames(1, this.searchInput.value.query);
    this.getTotalItem();
  }

  getPaginationandGames(Newpage: number, query: string) {
    this.gamesService.getGames(Newpage, query).subscribe(value => {
      this.games = value.results
    })
    console.log(query)
  }
  showForm(): void{
    this.showFormInTemplate = !this.showFormInTemplate;
  }
  navigateTo(Newpage: number) {
    this.page = Newpage,
      this.getPaginationandGames(Newpage, '')
  }

   searchOnGames() {
    this.showFormInTemplate = false;
    this.getPaginationandGames(1, this.searchInput.value.query)
  }

  getTotalItem(): void {
    this.gamesService.getTotalItem().subscribe(value => this.items = value)
  }
}
