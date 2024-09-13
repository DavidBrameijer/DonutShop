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

  buy(){
    this.donutService.resetCart();
  }

}
