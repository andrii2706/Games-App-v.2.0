import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ErrorComponent} from "./notification/error/error.component";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private userIsLogin: boolean;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private router: Router,
    public notification: MatDialog,
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  errorNotification(): void {
    const error = this.notification.open(ErrorComponent, {
      width: '50%'
    });
    setTimeout(() => {
      error.close();
    }, 1000)
  }

  closeDialog(): void {
    this.dialogRef.close()
  }

  Login(): void {
    this.loading = true;
    this.authService.SingIn(this.loginForm.value).subscribe(res => {
      this.dialogRef.close();
      this.loginForm.reset();
      this.router.navigate(['profile'])
    }, error => {
      this.dialogRef.close();
      this.errorNotification();
    })
  }
}

