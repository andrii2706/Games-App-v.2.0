import {Component, Input, OnInit} from '@angular/core';
import {IConsole} from "../../../interfaces/IConsoles";

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  @Input()
  consol: IConsole
  constructor() { }

  ngOnInit(): void {
  }

}
