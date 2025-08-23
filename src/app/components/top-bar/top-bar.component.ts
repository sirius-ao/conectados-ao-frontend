import { Component } from '@angular/core';
import { ControllerAsideBarStateService } from '../../services/controller-aside-bar-state.service';
import { lucideMenu, lucideBell, lucideMail, lucideSearch, lucideChevronsLeft, lucideMoon } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-top-bar',
  imports: [HlmIconDirective, NgIcon, HlmIconDirective, CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  providers: [provideIcons({ lucideMenu, lucideBell, lucideMail, lucideSearch, lucideChevronsLeft, lucideMoon })]
})
export class TopBarComponent {
  constructor(private _ControllerAsydeBarState: ControllerAsideBarStateService) {}
   isDark:boolean = false;


  protected changeAsideState(){
    this._ControllerAsydeBarState.hasClink(false)
  }

  toggleTheme(){
    this.isDark = !this.isDark;

    if(this.isDark){
      document.body.classList.add('dark-theme');
    }else{
      document.body.classList.remove('dark-theme');
    }
  }
  changeMode(){

  }
}
