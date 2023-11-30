import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serviciosaa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serviciosaa.component.html',
  styleUrl: './serviciosaa.component.css'
})
export class ServiciosaaComponent {
  @Input('NombreAccion') NombreAccion?: string;
  @Input('TextoAccion') TextoAccion?: string;
  @Input('url') url?: string;
}
