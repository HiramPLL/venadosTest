import { Component, OnInit, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api-service'
import { listGames } from './models/list.model'
import { LabelColumn } from './models/list.model';
import { FormControl } from '@angular/forms';


@Component({
	selector: 'list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() loading: Boolean;
	public data;
	public filterData:any = [];
	public LDA = 'Ascenso MX';
	public COM = 'Copa MX';
	public columnsToDisplay = [];
	columnLabel = {};
	tabs = ['Copa MX', 'Ascenso MX'];
	selectedTab = new FormControl(0);
	constructor(public dataApiService: DataApiService) {
		const label = new LabelColumn(); 
        this.columnLabel = label.getLabelMaster();

	}

	ngOnInit() {
		for (const label in this.columnLabel) {
            if (label) { this.columnsToDisplay.push(label); }
        }
		this.getAllGames();
	}
	selectedTabs(indexTab){
		console.log(indexTab);
		
		switch (indexTab) {
			case 1:
				this.filterData = this.filterleague(this.LDA);

				console.log(this.filterData);
				
				break;
		
			default:
				this.filterData = this.filterleague(this.COM);
				console.log(this.filterData);
				break;
		}	
	}

	getAllGames() {
		this.loading = true;
		this.dataApiService.getAllGames().subscribe((res) => {
			this.data = res['data'].games;
			this.filterData = this.filterleague(this.COM);
			this.loading = false;
		}, error => {
			this.loading = false;
			console.error(error);
		}
		)
	}

	filterleague(league){
		const data = this.data.filter((element)=>{
			return element.league == league;
		  });
		  return data;
	}
}