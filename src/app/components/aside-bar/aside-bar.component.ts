import { Component, OnInit } from '@angular/core';
import { ControllerAsideBarStateService } from '../../services/controller-aside-bar-state.service';
import { CommonModule } from '@angular/common';
import { HlmIconDirective } from "../../../../libs/ui/ui-icon-helm/src/lib/hlm-icon.directive";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArchive, lucideChartBar, lucideSettings, lucideLayers } from '@ng-icons/lucide';
import { hlmP, hlmUl } from '@spartan-ng/helm/typography';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-aside-bar',
  imports: [CommonModule, HlmIconDirective, NgIcon, RouterLinkActive, RouterLink],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.scss',
  providers: [provideIcons({lucideArchive, lucideChartBar, lucideSettings, lucideLayers})]
})
export class AsideBarComponent implements OnInit {
  protected hlmP = hlmP
  protected hlmUl = hlmUl
  protected activeColor:string = '#0f6fdd'

  constructor(
    private _ControllerAsideBarState: ControllerAsideBarStateService
  ) {}

  protected asideState: 'showSubMenu' | 'hideSubMenu' = 'hideSubMenu';

  changeAsideState(){
    this._ControllerAsideBarState.hasClink()
  }

  ngOnInit() {
    this._ControllerAsideBarState.controllerAsideBarState.subscribe((data) => {
      this.asideState = data ? 'showSubMenu' : 'hideSubMenu';
    });
  }
}
