import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import { Component } from '@angular/core';
import { GraphicComponent } from "../../../../components/graphic/graphic.component";
import { CardEstatisticaComponent } from "../../../../components/card-estatistica/card-estatistica.component";

@Component({
  selector: 'app-home',
  imports: [MatProgressBarModule, MatChipsModule, GraphicComponent, CardEstatisticaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
