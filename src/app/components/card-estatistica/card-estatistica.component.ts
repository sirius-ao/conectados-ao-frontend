import { Component, Input } from '@angular/core';
import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
  selector: 'app-card-estatistica',
  imports: [MatProgressBar],
  templateUrl: './card-estatistica.component.html',
  styleUrl: './card-estatistica.component.scss'
})
export class CardEstatisticaComponent {
  @Input() badge:string = '';
  @Input() percent:string = ''
  @Input() badgeColor:string = ''
  @Input() value:string = ''
  @Input() title:string = ''
  @Input() label:string = ''
}
