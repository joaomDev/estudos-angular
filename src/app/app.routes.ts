import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { AboutComponent } from './about/about.component'


export const ROUTES = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent},
  {path: 'about', component:AboutComponent}
]