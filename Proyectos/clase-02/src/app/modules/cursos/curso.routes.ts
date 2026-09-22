import { Routes } from "@angular/router";
import { CursosListado } from "./pages/cursos-listado/cursos-listado";
import { DetallesCurso } from "./pages/detalles-curso/detalles-curso";

export const cursoRoutes: Routes = [


    {
        path : "",
        children : [
            {
                path : 'cursos',
                component : CursosListado
            },
            {
                path : 'detalles/:id',
                component : DetallesCurso
            },
            {
                path : '**',
                redirectTo : 'cursos'
            }
        ]
    }


]