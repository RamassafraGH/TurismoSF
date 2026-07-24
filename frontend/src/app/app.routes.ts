import { Routes } from '@angular/router';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form';
import { CategoriaListComponent } from './components/categoria-list/categoria-list';

export const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
  { path: 'cargar', component: CategoriaFormComponent },
  { path: 'listado', component: CategoriaListComponent },
];
