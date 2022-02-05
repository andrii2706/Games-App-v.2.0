import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SearchDialogWindowComponent} from "../search-dialog-window/search-dialog-window.component";

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
      width:'600px'

    });
  }
}
