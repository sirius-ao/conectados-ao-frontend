import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerAsideBarStateService {
  constructor() { }
  controllerAsideBarState = new EventEmitter<boolean>()
  private controllerState:boolean = false

  hasClink(value:boolean){
    this.controllerAsideBarState.emit(!this.controllerState)
    this.controllerState = !this.controllerState
  }
}
