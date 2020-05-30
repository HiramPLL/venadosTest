import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './../material.module';

import { AdminRoutes } from './main.routing';
import { HomeComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ListComponent } from './components/list/list.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PlayersComponent } from './components/players/players.component';
import { DialogDetails } from './components/players/details/details.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule.forChild(AdminRoutes),
	],
	declarations: [
		HomeComponent,
		HeaderComponent,
		LeftMenuComponent,
		ListComponent,
		StatisticsComponent,
		PlayersComponent,
		DialogDetails
	],
	providers: [
	],
	exports: [
		HeaderComponent
	],
	entryComponents: [DialogDetails]
})
export class MainModule { }
