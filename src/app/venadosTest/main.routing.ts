import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component'
import { ListComponent } from './components/list/list.component'
export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'header',
                component: HeaderComponent
            },
            {
				path: 'list',
				component: ListComponent,
				data: {
					title: 'Listado',
					mode:'create'
				}
			},
        ]
    },
	{
		path: '**',
		redirectTo: ''
	}
];
