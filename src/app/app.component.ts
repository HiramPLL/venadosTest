import { Component, inject } from '@angular/core';
import { SidenavService } from './venadosTest/services/sidenav.service';
import { onMainContentChange } from './animations/animations';
import {Inject, Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ onMainContentChange ]
})
export class AppComponent {
  title = 'venadosTest';
  public onSideNavChange: boolean = true;


  constructor(private _sidenavService: SidenavService,) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    }
    )
  }

}
