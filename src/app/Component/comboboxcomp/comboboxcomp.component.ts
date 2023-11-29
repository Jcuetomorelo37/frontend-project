import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comboboxcomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comboboxcomp.component.html',
  styleUrl: './comboboxcomp.component.css'
})
export class ComboboxcompComponent {
  @Input('ValorPrimario') ValorPrimario?: string;
  @Input('valor1') valor1?: string;
  @Input('valor2') valor2?: string;
  @Input('valor3') valor3?: string;
  @Input('valor4') valor4?: string;
  @Input('valor5') valor5?: string;
  @Input('valor6') valor6?: string;
}
