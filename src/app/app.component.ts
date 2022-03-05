import {Component, HostListener} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @HostListener('window:scroll', ['$event']) onScroll(event: any){
    let pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void{

  }

  showOrHideButton(){
    const position  = window.pageYOffset;
    if (position === 0){

    }else if(position >= 500){

    }
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
    this.showOrHideButton()
  }
}
