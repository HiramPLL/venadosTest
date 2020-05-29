import { Component, OnInit, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api-service'
import { LabelColumn } from './models/list.model';


@Component({
	selector: 'statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
	@Input() loading: Boolean;
	public data;
	public columnsToDisplay = [];
	columnLabel = {};
	constructor(public dataApiService: DataApiService) {
		const label = new LabelColumn();
		this.columnLabel = label.getLabelMaster();
	}

	ngOnInit() {
		for (const label in this.columnLabel) {
			if (label) { this.columnsToDisplay.push(label); }
		}
		this.getAllStatistics();
	}

	getAllStatistics() {
		this.loading = true;
		this.dataApiService.getStatistics().subscribe((res) => {
			this.data = res['data'].statistics;
			this.loading = false;
		}, error => {
			this.loading = false;
			console.error(error);
		});
	}
}