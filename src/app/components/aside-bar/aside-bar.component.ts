import { Component, OnInit } from '@angular/core';
import { ControllerAsideBarStateService } from '../../services/controller-aside-bar-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside-bar',
  imports: [CommonModule],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.scss',
})
export class AsideBarComponent implements OnInit {
  constructor(
    private _ControllerAsideBarState: ControllerAsideBarStateService
  ) {}

  protected asideState: 'showSubMenu' | 'hideSubMenu' = 'hideSubMenu';

  ngOnInit() {
    this._ControllerAsideBarState.controllerAsideBarState.subscribe((data) => {
      this.asideState = data ? 'showSubMenu' : 'hideSubMenu';
    });
  }
}
