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
						path: 'home',
						loadChildren: './venadosTest/main.module#MainModule'
					},
					{
						path: '',
						redirectTo: 'home',
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