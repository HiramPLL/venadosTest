import { Component, OnInit, ViewChild } from '@angular/core';
import { DataApiService } from '../../services/data-api-service'
import { SidenavService } from '../../services/sidenav.service';
import { onMainContentChange } from '../../../animations/animations';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

@Component({
	selector: 'main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
	animations: [ onMainContentChange ]
})

export class HomeComponent implements OnInit {
	@ViewChild('leftMenu') formulario: LeftMenuComponent;
	private schema: any;
    public data : any;
    public loading: boolean = false;
	public onSideNavChange: boolean = true;

	constructor(private _sidenavService: SidenavService,public dataApiService: DataApiService) {
		this.schema = {
			mode:'main'
		}
		this._sidenavService.sideNavState$.subscribe( res => {
		  this.onSideNavChange = res;
		})
	  }

	ngOnInit() {
	}
	
	setMode(url) {
        let mode = url.value;
        switch (mode) {
            case 'list':
                this.schema.mode = mode;
                break;
            case 'statistics':
                this.schema.mode = mode;
                break;
            case 'players':
                this.schema.mode = mode;
                break;
            default:
                this.schema.mode = 'main';
                break;
        }
    }

	options(event){
		this.setMode(event);
	}

}