import { Component, OnInit } from '@angular/core';
import { ControllerAsideBarStateService } from '../../services/controller-aside-bar-state.service';
import { CommonModule } from '@angular/common';
import { HlmIconDirective } from "../../../../libs/ui/ui-icon-helm/src/lib/hlm-icon.directive";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArchive, lucideChartBar, lucideSettings, lucideLayers } from '@ng-icons/lucide';
import { hlmP, hlmUl } from '@spartan-ng/helm/typography';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsideBarTabComponent } from "../aside-bar-tab/aside-bar-tab.component";
import { event } from 'jquery';

@Component({
  selector: 'app-aside-bar',
  imports: [CommonModule, RouterLinkActive, RouterLink, AsideBarTabComponent],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.scss',
  providers: [provideIcons({lucideArchive, lucideChartBar, lucideSettings, lucideLayers})]
})
export class AsideBarComponent implements OnInit {
  protected hlmP = hlmP
  protected hlmUl = hlmUl
  protected activeColor:string = '#b62b01ec'

  //Lista de submenus 
  protected subMenuData = {
    layersMenu: [ 
      {label: 'Dashboard', route: 'archives/home'}, 
      {label: 'Registro', route: 'archives/registrar'}, 
      {label: 'List', route: 'archives/listar'},
      {label: 'Candidato', route: 'archives/candidato'}
    ],
     graphicsMenu: [ 
      {label: 'Dashboard', route: 'graphics/dashboard'}, 
      {label: 'Details', route: 'graphics/detalhes'}, 
      {label: 'Config', route: 'graphics/configs'}, 

    ]
  }

  //Recebe a lista dos submenus ativos
  protected activeSubMenu:{label:string, route:string}[] = this.subMenuData.layersMenu

  constructor(
    protected _ControllerAsideBarState: ControllerAsideBarStateService
  ) {}

  protected asideState: 'showSubMenu' | 'hideSubMenu' = 'hideSubMenu';
  menus: {label:string, route:string}[] = [{label: '', route: ''}] 

  getActiveSubMenu(data:[]){
    this.activeSubMenu = data
  }

  ngOnInit() {
    this._ControllerAsideBarState.controllerAsideBarState.subscribe((data) => {
      this.asideState = !data ?  'showSubMenu':'hideSubMenu';
    });
  }

  //muda o estado do asidebar
  changeAsideState(){
    this._ControllerAsideBarState.hasClink()
  }

}
