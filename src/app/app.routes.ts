import { Routes } from '@angular/router';
import { ArchivesComponent } from './modules/archives/archives.component';
import { DetalhesComponent } from './modules/archives/views/detalhes/detalhes.component';
import { GraphicsComponent } from './modules/graphics/graphics.component';
import { HomeComponent } from './modules/archives/views/home/home.component'

import {AboutComponentGrapic} from "./modules/graphics/views/about/about.component"
import {HomeComponentGrapic} from "./modules/graphics/views/home/home.component"

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
  {
    path: 'graphics',
    component: GraphicsComponent,
    children: [
      {path: 'home', component: HomeComponentGrapic},
      {path: 'about', component: HomeComponentGrapic}
    ]
  }
];
