import { Component } from '@angular/core';
import { InputWithLabelComponent } from "../../../../components/input-with-label/input-with-label.component";
import { SelectWithLabelComponent } from "../../../../components/select-with-label/select-with-label.component";

@Component({
  selector: 'app-registrar',
  imports: [InputWithLabelComponent, SelectWithLabelComponent],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {

}
