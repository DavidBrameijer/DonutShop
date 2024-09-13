import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut-model';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../../services/donut.service';
import { DonutDetailsModel } from '../../models/donut-details-model';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
  donutDetails:DonutDetailsModel = {} as DonutDetailsModel;
  constructor(private activatedRoute:ActivatedRoute, private donutService:DonutService){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let id:number = Number(paramMap.get("id"));
      console.log(id);
      this.donutService.getDonutDetails(id).subscribe((response:DonutDetailsModel) => {
        this.donutDetails = response;
      });
    })
  }

  addToCart(){
    this.donutService.addDonutToCart(this.donutDetails)
  }
}
