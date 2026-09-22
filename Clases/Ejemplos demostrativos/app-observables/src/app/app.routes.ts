import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./modules/library/pages/search-library/search-library').then((c) => c.SearchLibrary),
    },
];
