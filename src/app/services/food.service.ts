import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foodData } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll() :Food[]{
    return sample_foodData;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())); 
  }
}
