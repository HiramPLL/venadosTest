import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DataApiService } from '../../services/data-api-service'
import { DialogDetails } from './details/details.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export class LabelColumn {
	getLabelColumn() {
		return {
			'position': 'TABLA GENERAL',
			'image': 'EQUIPO',
			'games': 'JJ',
			'f_goals': 'DG',
			'a_goals': 'PTS'
		};
	}
}

@Component({
	selector: 'players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
	@Input() loading: Boolean;
	mobileQuery: MediaQueryList;
	public data;
	public info;
	public columnsToDisplay = [];
	columnLabel = {};
	private _mobileQueryListener: () => void;
	constructor(public dataApiService: DataApiService, public dialog: MatDialog ) {
		const label = new LabelColumn();
		this.columnLabel = label.getLabelColumn();
	}

	ngOnInit() {
		for (const label in this.columnLabel) {
			if (label) { this.columnsToDisplay.push(label); }
		}
		this.getAllPlayers();
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	getAllPlayers() {
		this.loading = true;
		this.dataApiService.getPlayers().subscribe((res) => {
			this.data = res['data'].team;
			this.loading = false;
		}, error => {
			this.loading = false;
			console.error(error);
		});
	}

	detail(event){
		this.info = event;
		this.openDialog();
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogDetails, {
			width: '650px',
			height: '570px',
		  	data: this.info
		});
	
		dialogRef.afterClosed().subscribe(result => {
		});
	  }
}