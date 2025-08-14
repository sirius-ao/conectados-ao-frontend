import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { HeaderMainComponent } from "../../components/header-main/header-main.component";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-admin-configs',
  imports: [FormsModule, MatButtonModule, HeaderMainComponent ],
  templateUrl: './admin-configs.component.html',
  styleUrl: './admin-configs.component.scss'
})
export class AdminConfigsComponent {
 selectedColor = '#1976d2';
 isDark:boolean = false;
 

  constructor(private _adminService: AdminService) {}

  changedValue(event:any){
    this._adminService.setMainColor(event.target.value)
  }

  save() {
    this._adminService.setMainColor(this.selectedColor);
  }

  toggleTheme(isDark:boolean){
    if(isDark){
      document.body.classList.add('dark-theme');
    }else{
      document.body.classList.remove('dark-theme');
    }
  }
}
