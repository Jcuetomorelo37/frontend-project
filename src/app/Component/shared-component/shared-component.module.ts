import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../Buttons/button/button.component';
import { InputLabelComponent } from '../Inputs/input-label/input-label.component';



@NgModule({
  declarations: [
  ],
  exports: [
    ButtonComponent,
    InputLabelComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent,
    InputLabelComponent
  ]
})
export class SharedComponentModule { }
