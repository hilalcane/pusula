import { Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnChanges {

  menuDrawerConfig: any = {
    closable: false,
    placement: 'left',
    visible: true,
    width: '45%'
  }

  searchDrawerConfig: any = {
    title: 'Search',
    closable: true,
    placement: 'top',
    visible: true
  }

  menuVisibility = false;
  searchVisibility = false;

  scroll = (event): void => {
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
    console.log(document.getElementById("main-content").scrollTop);

  };

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  ngOnChanges() {
  }

  toggleMenu() {
    this.menuVisibility = !this.menuVisibility;
  }

  toggleSearch() {
    this.searchVisibility = !this.searchVisibility;
  }
}
