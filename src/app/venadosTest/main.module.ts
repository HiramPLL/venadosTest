import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './../material.module';

import { AdminRoutes } from './main.routing';
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(AdminRoutes),
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  providers:[
  ],
  exports: [
    HeaderComponent
],
})
export class MainModule {}
