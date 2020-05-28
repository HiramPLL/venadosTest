import { Component, OnInit,inject } from '@angular/core';
import { DataApiService } from '../../services/data-api-service'
import { SidenavService } from '../../services/sidenav.service';
import { onMainContentChange } from '../../../animations/animations';
import {Inject, Injectable } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	animations: [ onMainContentChange ]
})

export class HomeComponent implements OnInit {

	public data : any;
	public onSideNavChange: boolean = true;

	constructor(private _sidenavService: SidenavService,public dataApiService: DataApiService) {
		this._sidenavService.sideNavState$.subscribe( res => {
		  console.log(res)
		  this.onSideNavChange = res;
		})
	  }

	ngOnInit() {
		console.log(1);
		this.getAllGames();
	}
	
	getAllGames() {
		this.dataApiService.getAllGames().subscribe((res) => {
			this.data = res;
			console.log(res);
		}, error => console.error("Error: " + error)
		)
	}

}