import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { ControllerAsideBarStateService } from '../../services/controller-aside-bar-state.service';

@Component({
  selector: 'app-aside-bar-tab',
  imports: [HlmIconDirective, NgIcon, RouterLinkActive, RouterLink],
  templateUrl: './aside-bar-tab.component.html',
  styleUrl: './aside-bar-tab.component.scss'
})
export class AsideBarTabComponent implements OnInit {
  @Input() label:string = ''
  @Input() route:string = '' 
  @Input() lucideIcon:string = ''
  @Input() menu:{label:string, route:string}[] = []
  @Output() exposeSubMenu = new EventEmitter();

  constructor(
    protected _ControllerAsideBarState: ControllerAsideBarStateService
  ) {}
  protected asideState: 'showSubMenu'|'hideSubMenu' = 'showSubMenu' 

  ngOnInit(): void {
    this._ControllerAsideBarState.controllerAsideBarState.subscribe((data) => {
      this.asideState = !data ?  'showSubMenu':'hideSubMenu';
    });
  }

  protected changeAsideState() {
    this.exposeSubMenu.emit(this.menu);
    this._ControllerAsideBarState.hasClink(false);
  }
}
