import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IDevelopers} from "../../../interfaces/IDevelopers";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  @Input()
  developer: IDevelopers

  @Output()
  data: EventEmitter<IDevelopers> = new EventEmitter<IDevelopers>()

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  showDeveloperDetails() {
    this.data.emit(this.developer)
    this.router.navigate([this.developer.id],{relativeTo:this.activatedRouter})
  }
}
