import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SuccessComponent} from "../notification/success/success.component";
import {ErrorComponent} from "../notification/error/error.component";
import {environment} from "../../../../environments/environment";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import MyErrorStateMatcher from "../../../dirictive/myErrorStateMatcher";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})



export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    public notification: MatDialog,
    private router: Router,
    public authService:AuthService

  ) {
  }
  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.registrationForm =
      new FormGroup({
        name: new FormControl('',[Validators.required]),
        surname: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
        phone: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      });

  }
  oNClick():void{
    this.dialogRef.close()
  }
  SuccessNotification(): void {
    const success = this.notification.open(SuccessComponent, {
      width: '50%'
    });
    setTimeout(()=>{
      success.close()
    },1000)
  }

  ErrorNotification(): void {
    let error = this.notification.open(ErrorComponent, {
      width: '50%',
    });
    setTimeout(() => {
      error.close();
    }, 1000)
  }

  Registration(): void {
    this.authService.Registration(this.registrationForm.value).subscribe(res => {
      this.dialogRef.close();
      this.registrationForm.reset();
      this.SuccessNotification();
      this.router.navigate(['profile'])
    }, error => {
      this.dialogRef.close();
      this.ErrorNotification();
    })
  }
}
