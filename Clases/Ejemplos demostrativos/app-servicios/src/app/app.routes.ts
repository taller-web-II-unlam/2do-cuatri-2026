import { Routes } from '@angular/router';
import { TareaActions } from './modules/tarea/tarea-actions/tarea-actions';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./modules/tarea/tarea-actions/tarea-actions').then((c) => c.TareaActions),
    },
    {
        path: '**',
        redirectTo: 'tareas', 
    }
];
