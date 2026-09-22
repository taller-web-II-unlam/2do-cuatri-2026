import { Routes } from '@angular/router';
import { CoursesList } from './modules/courses/pages/courses-list/courses-list';

export const routes: Routes = [
  {
    path: '',
    component: CoursesList,
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.routes').then((c) => c.coursesRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
