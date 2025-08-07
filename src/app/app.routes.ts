import { Routes } from '@angular/router';
import { ArchivesComponent } from './modules/candidatos/archives.component';
import { DetalhesComponent } from './modules/candidatos/views/detalhes/detalhes.component';
import { HomeComponent } from './modules/candidatos/views/home/home.component'
import { ListarComponent } from './modules/candidatos/views/listar/listar.component';
import { RegistrarComponent } from './modules/candidatos/views/registrar/registrar.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/archives/home',
    pathMatch: 'full'
  },
  {
    path: 'archives',
    component: ArchivesComponent,
    children: [
      {path: '', redirectTo: 'archives/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'listar', component: ListarComponent },
      { path: 'registrar', component: RegistrarComponent },
    ],
  },
 
];
