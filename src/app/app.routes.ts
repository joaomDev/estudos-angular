import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { Component } from '@angular/core';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { AboutComponent } from './about/about.component'


export const ROUTES = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children:[
              {path:'', redirectTo:'menu', pathMatch:'full'},
              {path:'menu', component:MenuComponent},
              {path: 'reviews', component:ReviewsComponent}
            ]},
  {path: 'about', component:AboutComponent}
]
