import {Component, ContentChild, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {IUser} from "../../interfaces/IUser";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit():void {
 this.loginForm = new FormGroup({
   email: new FormControl(''),
   password: new FormControl('')
 })
  }


  closeDialog():void {
    this.dialogRef.close();
  }
  Login(): void{
     this.httpClient.get<any>(environment.registerURL)
  }
}

