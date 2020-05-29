import { Component, OnInit, ViewChild } from '@angular/core';
import { DataApiService } from '../../services/data-api-service'
import { SidenavService } from '../../services/sidenav.service';
import { onMainContentChange } from '../../../animations/animations';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
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
			mode:'home'
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
            case 'edit':
                this.schema.mode = mode;
                this.schema.config.buttons = [
                    { name: "save" },
                    { name: "cancel" }
                ];
                this.schema.config.search.show = false;
                this.schema.config.pager.show = false;
                this.schema.config.header.show = true;
                this.schema.config.header.title = 'Editar cliente'
                break;
            case 'read':
                this.schema.mode = mode;
                this.schema.config.buttons = [
                    { name: "back" },
                ];
                this.schema.config.search.show = false;
                this.schema.config.pager.show = false;
                this.schema.config.header.title = 'Consulta cliente'
                break;
            default:
                this.schema.mode = 'home';
                break;
        }
    }

	options(event){
		this.setMode(event);
	}

}