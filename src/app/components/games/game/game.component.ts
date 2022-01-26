import {Component, Input, OnInit} from '@angular/core';
import {IGame} from "../../../interfaces/Igames";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input()
  game: IGame
  constructor() { }

  ngOnInit(): void {
  }

}
