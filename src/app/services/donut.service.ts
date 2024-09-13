import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel } from '../models/donut-model';
import { DonutDetailsModel } from '../models/donut-details-model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  getDonut():Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }

  getDonutDetails(id: number) : Observable<DonutDetailsModel> {
    return this.http.get<DonutDetailsModel>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }

  cart:DonutDetailsModel[] = [];

  addDonutToCart(d:DonutDetailsModel){
    this.cart.push(d);
  }

  resetCart(){
    this.cart = [];
  }
}
