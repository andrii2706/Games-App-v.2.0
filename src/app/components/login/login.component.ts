import {Component, ContentChild, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  @ContentChild(MatInput) input: MatInput;
  constructor(
    public dialogRef: MatDialogRef<any>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
}
