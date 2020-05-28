import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component'

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
        ]
    },
	{
		path: '**',
		redirectTo: ''
	}
];
