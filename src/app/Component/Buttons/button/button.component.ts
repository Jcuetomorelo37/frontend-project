import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
emitOnClick() {
  this.onClick.emit()
}
   @Output() onClick= new EventEmitter<void>()
  @Input('ButtonName') ButtonName?: string;
}
