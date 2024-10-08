import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { DonutModel } from '../../models/donut-model';
import { DonutDetailsModel } from '../../models/donut-details-model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private donutService:DonutService){}

  getCart():DonutDetailsModel[]{
    return this.donutService.cart;
  }

  getCalories():number{
    return this.getCart().reduce((total, current) => total += current.calories, 0)
  }

  removeDonut(d:DonutDetailsModel){
    this.donutService.removeFromCart(d);
  }
}
