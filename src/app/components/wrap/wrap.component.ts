import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "../login/auth/auth.component";

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.scss']
})
export class WrapComponent implements OnInit {
  iconChange: boolean;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }


  openAuthModal() {
    const authRef = this.dialog.open(AuthComponent, {
      width: '75%',
      height: 'auto',
      panelClass: 'mat-dialog-container-custome'
    })
  }

  themeToggle() :void {
    document.body.classList.toggle('white-theme');
  }
}
