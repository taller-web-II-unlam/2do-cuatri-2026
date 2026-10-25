import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'empleados',
        loadChildren: ()=> import('./modules/empleados/empleados.routes').then(e => e.empleadosRoutes)
    },
    {
        path: '**',
        redirectTo: ''
    }

];
