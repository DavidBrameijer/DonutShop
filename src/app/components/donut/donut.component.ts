import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut-model';
import { DonutService } from '../../services/donut.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
  donutResult:DonutModel = {} as DonutModel;
  constructor(private donutService:DonutService){}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.donutService.getDonut().subscribe((response:DonutModel) => {
      console.log(response);
      this.donutResult = response;
    });
  }

}
