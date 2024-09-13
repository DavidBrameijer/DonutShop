import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {path:"Donut", component:DonutComponent},
    {path:"Donut/:id", component:DonutDetailsComponent},
    {path:"Cart", component:CartComponent},
    {path:"", redirectTo:"/Donut", pathMatch:"full"}, //pathmatch full is to make sure it directs to /donut
];
