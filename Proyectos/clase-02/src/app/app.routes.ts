import { Routes } from '@angular/router';
import { CursosListado } from './modules/cursos/pages/cursos-listado/cursos-listado';
import { DetallesCurso } from './modules/cursos/pages/detalles-curso/detalles-curso';

export const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./modules/cursos/curso.routes').then((c) => c.cursoRoutes),
  },

  //componente lazy loading
  // {
  //     path : 'detalles',
  //     loadComponent : ()=> import('./modules/cursos/pages/detalles-curso/detalles-curso').then(d => d.DetallesCurso)
  // },
  {
    path: '**',
    redirectTo: 'cursos',
  },
];
