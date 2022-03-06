import {Component, HostListener} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    let pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) {
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
