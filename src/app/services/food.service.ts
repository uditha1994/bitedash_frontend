import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foodData, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';

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

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodByTags(tag:string):Food[]{
    return tag=="All"?
    this.getAll():
    this.getAll().filter(Food => Food.tags?.includes(tag))
  }
}
