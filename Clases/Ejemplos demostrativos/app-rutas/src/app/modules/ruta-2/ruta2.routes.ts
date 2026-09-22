import { Routes } from "@angular/router";
import { Ruta2Component } from "./pages/ruta-2/ruta-2.component";
import { SubRuta1Component } from "./pages/sub-ruta-1/sub-ruta-1.component";
import { SubRuta2Component } from "./pages/sub-ruta-2/sub-ruta-2.component";

export const ruta2Routes: Routes = [
  {
    path: '',
    component: Ruta2Component,
    children: [
      {
        path: 'sub-ruta-1',
        component: SubRuta1Component,
      },
      {
        path: 'sub-ruta-2',
        component: SubRuta2Component,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export default ruta2Routes;

