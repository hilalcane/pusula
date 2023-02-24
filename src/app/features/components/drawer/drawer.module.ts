import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    NzDrawerModule
  ],
  exports: [
    DrawerComponent
  ]
})
export class DrawerModule { }
