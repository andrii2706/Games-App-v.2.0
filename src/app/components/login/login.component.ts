import {Component, ContentChild, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {IUser} from "../../interfaces/IUser";
import {SuccessComponent} from "./notification/success/success.component";
import {ErrorComponent} from "./notification/error/error.component";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public registrationForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    public notification: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.registrationForm =
      new FormGroup({
        name: new FormControl(''),
        surname: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        password: new FormControl(''),

      })
  }

  oNClick(): void {
    this.dialogRef.close();
  }

  SuccessNotification(): void {
    const success = this.notification.open(SuccessComponent, {
      width: '25%'
    });
    setTimeout(()=>{
    success.close()
    },1000)
  }

  ErrorNotification(): void {
    let error = this.notification.open(ErrorComponent, {
      width: '25%',
    });
    setTimeout(() => {
      error.close();
      }, 1000)
  }

  Registration(): void {
    this.httpClient.post<IUser>(environment.registerURL, this.registrationForm.value).subscribe(res => {
      this.dialogRef.close();
      this.registrationForm.reset();
      this.SuccessNotification();
      this.router.navigate(['profile/:id'])
    }, error => {
      this.dialogRef.close();
      this.ErrorNotification();
    })
  }
}

