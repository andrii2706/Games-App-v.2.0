import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../login.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RegistrationComponent} from "../registration/registration.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
  ) {
  }

  ngOnInit(): void {
  }

  openLoginModal(): void {
    const loginRef = () => {
      this.dialog.open(LoginComponent, {
        width: '75%', height: 'auto'
      });
    }
    loginRef();
  }

  openRegistrationModal(): void {
    const registrationRef = () => {
      this.dialog.open(RegistrationComponent, {
        width: '75%', height: 'auto'
      });
    }
    registrationRef();
  }

  onCloseModal(): void {
    this.dialogRef.close()
  }
}
