import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { MainButtonComponent } from "../../components/main-button/main-button.component";
import { HeaderMainComponent } from "../../components/header-main/header-main.component";
import { CardEstatisticaComponent } from "../../components/card-estatistica/card-estatistica.component";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-admin-configs',
  imports: [FormsModule, MainButtonComponent, MatButtonModule, HeaderMainComponent, CardEstatisticaComponent],
  templateUrl: './admin-configs.component.html',
  styleUrl: './admin-configs.component.scss'
})
export class AdminConfigsComponent {
 selectedColor = '#1976d2';

  constructor(private _adminService: AdminService) {}

  changedValue(event:any){
    this._adminService.setMainColor(event.target.value)
  }

  save() {
    this._adminService.setMainColor(this.selectedColor);
  }
}
