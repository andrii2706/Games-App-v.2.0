import { Component, OnInit } from '@angular/core';
import {ConsolesService} from "../../services/consoles.service";
import {IConsole, IConsoles} from "../../interfaces/IConsoles";

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.scss']
})
export class ConsolesComponent implements OnInit {

  page:number
  consoles:IConsoles
  console: IConsole[]
  constructor(
    private  consolesService:ConsolesService
  ) { }

  ngOnInit(): void {
    this.getAllConsoles(1);
  }
  getAllConsoles (Newpage :number) {
    this.consolesService.getAllConsoles(Newpage).subscribe(value => {this.console = value.results})
  }
  navigateTo(Newpage: number){
    this.page = Newpage,
      this.getAllConsoles(Newpage)
  }
}
