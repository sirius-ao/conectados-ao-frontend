import { Routes } from '@angular/router';
import { ArchivesComponent } from './modules/archives/archives.component';
import { DetalhesComponent } from './modules/archives/views/detalhes/detalhes.component';
import { HomeComponent } from './modules/archives/views/home/home.component'


export const routes: Routes = [
  {
    path: 'archives',
    component: ArchivesComponent,
    children: [
      {path: '', redirectTo: 'archives/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'detalhes', component: DetalhesComponent },
    ],
  },
 
];
