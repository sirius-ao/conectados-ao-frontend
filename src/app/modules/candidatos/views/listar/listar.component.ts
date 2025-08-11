import { Component } from '@angular/core';
import { UserTablesComponent } from "../../../../components/user-tables/user-tables.component";
import { HeaderMainComponent } from "../../../../components/header-main/header-main.component";
import { StepperComponent } from "../../../../components/stepper/stepper.component";

@Component({
  selector: 'app-listar',
  imports: [HeaderMainComponent, UserTablesComponent],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent {

}
