import { Component, inject, signal } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { InputWithLabelComponent } from "../input-with-label/input-with-label.component";
import { SelectWithLabelComponent } from "../select-with-label/select-with-label.component";


@Component({
  selector: 'app-stepper',
imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatProgressSpinnerModule,
    InputWithLabelComponent,
    SelectWithLabelComponent
],  
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
 private _formBuilder = inject(FormBuilder);
 protected stepIsLoading = signal(false);

 nextStep(){
  this.stepIsLoading.set(true);

  setTimeout(()=>{
    this.stepIsLoading.set(false);
  }, 500);
 }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
}
