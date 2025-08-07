import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-with-label',
  imports: [],
  templateUrl: './select-with-label.component.html',
  styleUrl: './select-with-label.component.scss'
})
export class SelectWithLabelComponent {
  @Input() label:string = ''
  @Input() placeholder:string = ''
}
