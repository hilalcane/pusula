import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

const mainRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    NzDrawerModule
  ]
})
export class MainModule { }
