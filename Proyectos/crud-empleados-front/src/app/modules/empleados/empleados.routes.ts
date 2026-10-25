import { Routes } from "@angular/router";
import { ListEmpleado } from "./pages/list-empleado/list-empleado";
import { CreateEmpleado } from "./pages/create-empleado/create-empleado";
import { UpdateEmpleado } from "./pages/update-empleado/update-empleado";
import { DetailEmpleado } from "./pages/detail-empleado/detail-empleado";

export const empleadosRoutes: Routes = [

    {
        path: '',
        children: [
            {
                path: 'list-empleados',
                component: ListEmpleado
            },
            {
                path: 'create-empleado',
                component: CreateEmpleado
            },
            {
                path: 'update-empleado/:id',
                component: UpdateEmpleado
            },
            {
                path: 'detail-empleado/:id',
                component: DetailEmpleado
            },
            {
                path: '**',
                redirectTo: 'list-empleados'
            },

        ]
    }


]