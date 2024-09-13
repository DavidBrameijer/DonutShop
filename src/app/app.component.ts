import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonutService } from './services/donut.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private donutService:DonutService){}
  title = 'DonutShop';

  getCartLength():number{
    return this.donutService.cart.length;
  }
}
