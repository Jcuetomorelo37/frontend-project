import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../Buttons/button/button.component';



@NgModule({
  declarations: [
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent
  ]
})
export class SharedComponentModule { }
