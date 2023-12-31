import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../Buttons/button/button.component';
import { InputLabelComponent } from '../Inputs/input-label/input-label.component';
import { ServiciosaaComponent } from '../serviciosaa/serviciosaa.component';
import { TalkProductsComponent } from '../talkproducts/talkproducts.component';
import { ComboboxcompComponent } from '../comboboxcomp/comboboxcomp.component';



@NgModule({
  declarations: [
  ],
  exports: [
    ButtonComponent,
    InputLabelComponent,
    ServiciosaaComponent,
    TalkProductsComponent,
    ComboboxcompComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent,
    InputLabelComponent,
    ServiciosaaComponent,
    TalkProductsComponent,
    ComboboxcompComponent
  ]
})
export class SharedComponentModule { }
