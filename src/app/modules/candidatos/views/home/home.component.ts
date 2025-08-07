import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import { Component } from '@angular/core';
import { CardEstatisticaComponent } from "../../../../components/card-estatistica/card-estatistica.component";

@Component({
  selector: 'app-home',
  imports: [MatProgressBarModule, MatChipsModule, CardEstatisticaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
