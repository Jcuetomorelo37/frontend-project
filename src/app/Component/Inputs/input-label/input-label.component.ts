import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-label',
  standalone: true,
  imports: [CommonModule,
            ReactiveFormsModule],
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.css'
})
export class InputLabelComponent {
  @Input ('placeholder') placeholder: string = 'Placeholder';
  @Input ('type') type: string = 'text';
  @Input ('inputId') inputId: string = 'text';
  @Input ('inputName') inputName: string = '';
  @Input ('inputRequired') inputRequired: boolean = false;
  @Input() control!: FormControl;
}
