
import { Component } from '@angular/core';
import { AsideBarComponent } from "./components/aside-bar/aside-bar.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { RouterOutlet } from '@angular/router';
import { lucideBell, lucideChevronsLeft, lucideMail, lucideMenu, lucideSearch } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { ControllerAsideBarStateService } from './services/controller-aside-bar-state.service';
import { CommonModule } from '@angular/common';
import { AdminService } from './services/admin.service';


@Component({
  selector: 'app-root',
  imports: [AsideBarComponent, CommonModule, TopBarComponent, RouterOutlet, HlmIconDirective, NgIcon, HlmButtonDirective, HlmIconDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [provideIcons({ lucideMenu, lucideBell, lucideMail, lucideSearch, lucideChevronsLeft })]
  
})
export class 
AppComponent {
  title = 'conectados-ao-frontend';
  protected asideState: 'showSubMenu' | 'hideSubMenu' = 'hideSubMenu';

   constructor(protected _ControllerAsideBarState: ControllerAsideBarStateService, private _adminService: AdminService) {}
  
    protected changeAsideState(){
      this._ControllerAsideBarState.hasClink()
    }

      ngOnInit() {
        this._adminService.loadSavedColor();
    this._ControllerAsideBarState.controllerAsideBarState.subscribe((data) => {
      this.asideState = data ?  'showSubMenu':'hideSubMenu';
    });
  }
}
