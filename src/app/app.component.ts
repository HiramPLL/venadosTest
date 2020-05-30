import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidenavService } from './venadosTest/services/sidenav.service';
import { onMainContentChange } from './animations/animations';
import { Inject, Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [onMainContentChange]
})
export class AppComponent {
	title = 'venadosTest';
	mediaSub: Subscription;
	deviceXs: boolean;
	public onSideNavChange: boolean = true;


	constructor(public mediaObserver: MediaObserver, private _sidenavService: SidenavService, ) {
		this._sidenavService.sideNavState$.subscribe(res => {
			this.onSideNavChange = res;
		}
		)
	}

	ngOnInit() {
		this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
			(res.mqAlias);
			this.deviceXs = res.mqAlias === "xs" ? true : false;
		})
	}

	ngOnDestroy() {
		this.mediaSub.unsubscribe();
	}

}
