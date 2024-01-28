import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  foods:Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      let foodObservable:Observable<Food[]>;

      if(params.searchTerm)
        foodObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
        foodObservable = this.foodService.getAllFoodByTags(params.tag);
      else
        foodObservable = foodService.getAll();

        foodObservable.subscribe((serverFoods)=>{
          this.foods = serverFoods;
        })
    })
    
  }

  ngOnInit(): void {
    
  }

}
