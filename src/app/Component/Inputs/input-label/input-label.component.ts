import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.css'
})
export class InputLabelComponent {
   @Input('LabelName') LabelName?: string;
}
