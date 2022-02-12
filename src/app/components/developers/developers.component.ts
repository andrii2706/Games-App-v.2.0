import { Component, OnInit } from '@angular/core';
import {DevelopersService} from "../../services/developers.service";
import {IDevelopers, IDevelopersFull} from "../../interfaces/IDevelopers";

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {
  totalDevelopers: IDevelopersFull
  developers: IDevelopers[]
  page:number

  constructor(
    private  developersService:DevelopersService
  ) { }

  ngOnInit(): void {
    this.getDevelopers(1);
    this.getAllDevelopersCount();
  }
  getDevelopers(NewPage: number){
  this.developersService.getAllDevelopers(NewPage).subscribe(value => this.developers = value.results)
  }
  getAllDevelopersCount(){
    this.developersService.getCountOfDevelopers().subscribe(value => this.totalDevelopers = value)
  }
  navigateToButton(NewPage: number){
  this.page = NewPage;
  this.getDevelopers(NewPage);
  }
}
