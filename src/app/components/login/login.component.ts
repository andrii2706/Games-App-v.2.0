import {Component, ContentChild, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {IUser} from "../../interfaces/IUser";
import {SuccessComponent} from "./notification/success/success.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public registrationForm!: FormGroup;
  registrationUrl = 'http://localhost:3000/registratedUsers'
  constructor(
    public dialogRef: MatDialogRef<any>,
       public notification: MatDialog,
       private router:Router,
       private formBuilder:FormBuilder,
       private httpClient:HttpClient
  ) {
  }

  ngOnInit(): void {
    this.registrationForm =
      new FormGroup({
        name:new FormControl(''),
        surname:new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        password: new FormControl(''),

    })
  }

  oNClick(): void {
    this.dialogRef.close();
  }

  SuccesNotification():void{
    const success = this.notification.open(SuccessComponent,{
      width:'25%'
    })
  }

  Registration(): void{
    this.httpClient.post<IUser>(this.registrationUrl, this.registrationForm.value).subscribe(response =>{
      this.dialogRef.close();

      this.registrationForm.reset();
      this.router.navigate(['profile/:id'])
    })
  }
}

