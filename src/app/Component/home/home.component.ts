import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../Buttons/button/button.component';
import { ServiciosaaComponent } from '../serviciosaa/serviciosaa.component';
import { TalkProductsComponent } from '../talkproducts/talkproducts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ServiciosaaComponent, TalkProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  
}
