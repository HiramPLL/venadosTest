import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { onSideNavChange, animateText } from '../../../animations/animations'
import { DataApiService } from '../../services/data-api-service'
import { SidenavService } from '../../services/sidenav.service'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

interface schema {
	value: string;
	name: string;
	icon: string;
}

@Component({
	selector: 'app-left-menu',
	templateUrl: './left-menu.component.html',
	styleUrls: ['./left-menu.component.css'],
	animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {
	// @Input() schema : any;
    @Output() onSelected: EventEmitter<any> = new EventEmitter();
	public option;
	public sideNavState: boolean = true;
	public linkText: boolean = true;

	public pages: schema[] = [
		{ name: 'Inicio', value: 'list', icon: 'home' },
		{ name: 'Estadisticas', value: 'statistics', icon: 'timeline' },
		{ name: 'Jugadores', value: 'players', icon: 'person_pin' },
	]

	constructor(
		private _sidenavService: SidenavService,
		public dataApiService: DataApiService, 
		private router: Router,
        private activatedRoute: ActivatedRoute,
	) {
	 }

	ngOnInit() {
	}

	onSinenavToggle() {
		this.sideNavState = !this.sideNavState

		setTimeout(() => {
			this.linkText = this.sideNavState;
		}, 200)
		this._sidenavService.sideNavState$.next(this.sideNavState)
	}

	selectedItem(item) {
		this.option = item;
		this.onSelected.emit(item);
	}
}