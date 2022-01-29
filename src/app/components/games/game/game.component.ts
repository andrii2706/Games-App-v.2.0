import {Component, Input, OnInit} from '@angular/core';
import {IGame} from "../../../interfaces/Igames";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
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
    config: NgbRatingConfig,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

  showGameDetails() {
    // this.router.navigate([this.game.id],{relativeTo:this.activatedRouter})
    // console.log('Hello Details');
  }
}
