import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './../material.module';


import { AdminRoutes } from './main.routing';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ListComponent } from './components/list/list.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		NgxSkeletonLoaderModule,
		RouterModule.forChild(AdminRoutes),
	],
	declarations: [
		HomeComponent,
		HeaderComponent,
		LeftMenuComponent,
		ListComponent
	],
	providers: [
	],
	exports: [
		HeaderComponent
	],
})
export class MainModule { }
