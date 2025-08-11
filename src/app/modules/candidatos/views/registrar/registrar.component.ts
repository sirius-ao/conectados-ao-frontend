import { Component } from '@angular/core';
import { InputWithLabelComponent } from "../../../../components/input-with-label/input-with-label.component";
import { SelectWithLabelComponent } from "../../../../components/select-with-label/select-with-label.component";
import { HeaderMainComponent } from "../../../../components/header-main/header-main.component";
import { StepperComponent } from "../../../../components/stepper/stepper.component";

@Component({
  selector: 'app-registrar',
  imports: [HeaderMainComponent, StepperComponent],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {

}
