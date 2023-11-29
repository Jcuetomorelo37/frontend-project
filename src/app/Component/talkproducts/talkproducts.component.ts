import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-talkproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './talkproducts.component.html',
  styleUrl: './talkproducts.component.css'
})
export class TalkProductsComponent {
  @Input('NombreAire') NombreAire?: string;
  @Input('Estado') Estado?: string;
  @Input('Precio') Precio?: string;
}
