import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SearchDialogWindowComponent} from "../search-dialog-window/search-dialog-window.component";
import {LoginComponent} from "../login/login.component";
import {AuthComponent} from "../login/auth/auth.component";

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.scss']
})
export class WrapComponent implements OnInit {



  constructor(
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }
  openSearchWindow(){
    const  dialogRef =  this.dialog.open(SearchDialogWindowComponent,{
      width:'75%',
      panelClass: 'mat-dialog-container-custome'
    });
  }
  openLoginModal(){
    const loginRef = this.dialog.open(AuthComponent,{
      width: '75%',
      height: 'auto',
      panelClass: 'mat-dialog-container-custome'
    })
  }
}
