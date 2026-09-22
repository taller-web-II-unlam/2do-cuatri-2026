import { Routes } from "@angular/router";
import { CoursesList } from "./pages/courses-list/courses-list";

export const coursesRoutes: Routes = [

    {
        path: '',
        children: [
            {
                path: 'courses-list',
                component: CoursesList
            },
            {
                path: '**',
                redirectTo: 'courses-list'
            },

        ]
    }


]