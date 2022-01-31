import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IGame, IGamesDetails} from "../../../interfaces/Igames";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input()
  game: IGame

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  @Output()
  data: EventEmitter<IGame> = new EventEmitter<IGame>()

  ngOnInit(): void {
  }

  showGameDetails() {
    this.data.emit(this.game)
    this.router.navigate([this.game.id], {relativeTo: this.activatedRouter})

  }
}
