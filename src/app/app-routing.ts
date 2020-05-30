import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullComponent } from './venadosTest/layouts/full/full.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: '',
				component: FullComponent,
				children: [
					{
						path: 'main',
						loadChildren: './venadosTest/main.module#MainModule'
					},
					{
						path: '',
						redirectTo: 'main',
						pathMatch: 'full'
					}
				]
			},
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRouting {

}