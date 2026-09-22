import { Routes } from '@angular/router';
import { Ruta2Component } from './modules/ruta-2/pages/ruta-2/ruta-2.component';
import { Ruta4Component } from './modules/ruta-4/pages/ruta-4/ruta-4.component';
import { Ruta1Component } from './modules/ruta-1/pages/ruta-1.component';

export const routes: Routes = [
    {
        path: "ruta-1",
        component: Ruta1Component,
    },
    {
        path: 'ruta-2',
        loadChildren: () => import('./modules/ruta-2/ruta2.routes'), //.then(m => m.ruta2Routes)
    },
    {
        path: "ruta-3",
        loadComponent: () => import('./modules/ruta-3/pages/ruta-3.component')
    },
    {
        path: "ruta-4",
        component: Ruta4Component,
    },
    {
        path: '**',
        redirectTo: 'ruta-1',
    }
];
