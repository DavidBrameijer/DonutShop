import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';

export const routes: Routes = [
    {path:"Donut", component:DonutComponent},
    {path:"Donut/:id", component:DonutDetailsComponent},
    {path:"", redirectTo:"/Donut", pathMatch:"full"},
];
