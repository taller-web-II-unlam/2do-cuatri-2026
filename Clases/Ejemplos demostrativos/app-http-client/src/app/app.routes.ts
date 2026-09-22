import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./modules/pokemon/pages/search-pokemon/search-pokemon').then((c) => c.SearchPokemon),
    },
];
