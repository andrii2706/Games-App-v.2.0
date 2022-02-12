import {Component, Input, OnInit} from '@angular/core';
import {IDevelopers} from "../../../interfaces/IDevelopers";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  @Input()
  developer: IDevelopers

  constructor() { }

  ngOnInit(): void {
  }

}
