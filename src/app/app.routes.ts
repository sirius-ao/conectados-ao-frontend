import { Routes } from '@angular/router';
import { ArchivesComponent } from './modules/candidatos/archives.component';
import { DetalhesComponent } from './modules/candidatos/views/detalhes/detalhes.component';
import { HomeComponent } from './modules/candidatos/views/home/home.component'
import { ListarComponent } from './modules/candidatos/views/listar/listar.component';
import { RegistrarComponent } from './modules/candidatos/views/registrar/registrar.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { GraphicsDashboardComponent } from './modules/graphics/views/graphics-dashboard/graphics-dashboard.component';
import { GraphicsComponent } from './modules/graphics/graphics.component';
import { CandidatoComponent } from './modules/candidatos/views/candidato/candidato.component';
import { AdminConfigsComponent } from './modules/admin-configs/admin-configs.component';


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
      {path: '', redirectTo: '/archives/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'listar', component: ListarComponent },
      { path: 'registrar', component: RegistrarComponent },
      { path: 'candidato', component: CandidatoComponent }
    ],
  },

  {
    path: 'graphics',
    component: GraphicsComponent,
    children: [
      {path: '', redirectTo: '/graphics/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: GraphicsDashboardComponent},
      {path: 'detalhes', component: GraphicsDashboardComponent},
      {path: 'configs', component: AdminConfigsComponent}

    ]
  }
 
];
