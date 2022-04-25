import {Component, ContentChild, OnInit} from '@angular/core';
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-show-hide-password',
  templateUrl: './show-hide-password.component.html',
  styleUrls: ['./show-hide-password.component.scss']
})
export class ShowHidePasswordComponent implements OnInit {
  showPassword = false;
  @ContentChild(MatInput) input: MatInput;

  constructor() { }

  ngOnInit(): void {
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
}
