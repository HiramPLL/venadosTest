import { Component, OnInit, Inject, } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
	selector: 'DialogDetails',
	templateUrl: 'details.html',
})
export class DialogDetails {

	constructor(
		public dialogRef: MatDialogRef<DialogDetails>,
		@Inject(MAT_DIALOG_DATA) public data) { }
	

	ngOnInit(){
		if(this.data){
			this.data['fullName'] = this.data.name+' '+this.data.first_surname+' '+this.data.second_surname;
		}
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

}