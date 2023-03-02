import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: any = [
    {
      topMenu: 'Books',
      subMenus: [
        'Novel',
        'Science',
        'Comic Books',
        'Kid'
      ]
    },
    {
      topMenu: 'Education Books',
      subMenus: [
        'Computer Books',
        'Academic Books',
        'High School Books'
      ]
    },
    {
      topMenu: 'Stationery',
      subMenus: [
        'Pencils',
        'Notebooks',
        'School Bags'
      ]
    },
    {
      topMenu: 'Music',
      sebMenus: [

      ]
    },
    {
      topMenu: 'Electronics',
      subMenus: [

      ]
    }
  ];

  submenuVisibility = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(index: number) {
    console.log(this.menu?.subMenus[index]);

    if (index === this.menu.subMenus[index]) {
      this.submenuVisibility = !this.submenuVisibility;
    }
  }
}
