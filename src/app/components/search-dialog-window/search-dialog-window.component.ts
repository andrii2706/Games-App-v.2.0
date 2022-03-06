import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-search-dialog-window',
  templateUrl: './search-dialog-window.component.html',
  styleUrls: ['./search-dialog-window.component.scss']
})
export class SearchDialogWindowComponent implements OnInit {
  favoriteColor = '';

  constructor(
    public dialogRef: MatDialogRef<any>,
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSearch(){
    console.log(this.favoriteColor);
  }

}
