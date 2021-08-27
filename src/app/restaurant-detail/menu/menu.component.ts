import { MenuItem } from './../menu-item/menu-item.model';
import { Routes, ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',

})
export class MenuComponent implements OnInit {

menu:Observable<MenuItem[]>

  constructor(private restaurantsService:RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService
    .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }
  addMenuItem(item:MenuItem){
    console.log(item)
  }
}
