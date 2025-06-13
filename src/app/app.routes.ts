import { Routes } from '@angular/router';
import { ArchivesComponent } from './modules/archives/archives.component';
import { HomeComponent } from './modules/archives/views/home/home.component';
import { DetalhesComponent } from './modules/archives/views/detalhes/detalhes.component';

export const routes: Routes = [
  {
    path: 'archives',
    component: ArchivesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: DetalhesComponent },
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ],
  },
];
