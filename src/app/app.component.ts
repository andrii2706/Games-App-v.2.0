import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    let pageYoffset = window.pageYOffset;
    if (pageYOffset >= 100) {
      this.topScrollBtn = 'btn-show'
    }else if (pageYoffset <= 100) {
      this.topScrollBtn= 'btn-hide'
    }
  }


  topScrollBtn: string
  constructor(private scroll: ViewportScroller) {
  }

  scrollToTop() {
    const top = this.scroll.scrollToPosition([0, 0]);

  }


}
