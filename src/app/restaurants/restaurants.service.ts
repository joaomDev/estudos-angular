import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { RestaurantsComponent } from './restaurants.component';
import { Restaurant } from "./restaurant/restaurant.model";


@Injectable()
export class RestaurantsService{

  constructor(private http:Http){}

   restaurants(): Observable<Restaurant[]>{

    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response=>response.json())
    .catch(ErrorHandler.handleError)
  }
  restaurantById(id:string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(Response=> Response.json())
    .catch(ErrorHandler.handleError)

  }

  reviewsOfRestaurants(id:string):Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(Response=> Response.json())
    .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id:string):Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(Response=> Response.json())
    .catch(ErrorHandler.handleError)
  }

}
