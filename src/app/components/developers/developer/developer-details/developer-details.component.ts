import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DevelopersService} from "../../../../services/developers.service";
import {IGamesDetails} from "../../../../interfaces/Igames";
import {IDevelopersDetails} from "../../../../interfaces/IDevelopers";

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.scss']
})
export class DeveloperDetailsComponent implements OnInit {
  @ViewChild('description')
  developerDescription: ElementRef
  @Input()
  developerDetails: IDevelopersDetails

  constructor(
    public activatedRoute: ActivatedRoute,
    public developersService: DevelopersService
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.developersService.getDevelopersById(id).subscribe(value => {
        this.developerDetails = value
      })
    })
  }

  ngOnInit(): void {
  }

  backToDevelopers() {
    history.back();
  }
}
