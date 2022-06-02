import {Component, HostListener} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    let pageYOffset = window.pageYOffset;
    if (pageYOffset >= 500) {
      this.topScrollBtn = 'btn-show'
    }else if (pageYOffset <= 500) {
      this.topScrollBtn = 'btn-hide'
    }
  }
  topScrollBtn: string
  constructor(private scroll: ViewportScroller) {
  this.topScrollBtn = 'hide'
  }

  scrollToTop() {
    const top = this.scroll.scrollToPosition([0, 0]);
  }

}
