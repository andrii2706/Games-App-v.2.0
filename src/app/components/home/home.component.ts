import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Unleash the Next Generation of Gaming';
  subtitle = 'Future of eSPORTS';
  constructor() { }

  ngOnInit(): void {
  }

}
