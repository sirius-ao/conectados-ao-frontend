import { Component } from '@angular/core';
import { HeaderMainComponent } from "../../../../components/header-main/header-main.component";
import {MatTabsModule} from '@angular/material/tabs';
import { InputWithLabelComponent } from "../../../../components/input-with-label/input-with-label.component";
import { SelectWithLabelComponent } from "../../../../components/select-with-label/select-with-label.component";
import { MainButtonComponent } from "../../../../components/main-button/main-button.component";

@Component({
  selector: 'app-candidato',
  imports: [HeaderMainComponent, MatTabsModule, InputWithLabelComponent, SelectWithLabelComponent, MainButtonComponent],
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.scss'
})
export class CandidatoComponent {

}
