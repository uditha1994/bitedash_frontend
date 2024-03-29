import { Injectable, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foodData, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_TAG_URL, FOODS_SEARCHBY_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }

  getAll() : Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOODS_SEARCHBY_URL + searchTerm); 
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodByTags(tag:string):Observable<Food[]>{
    return tag=="All"?
    this.getAll():
    this.http.get<Food[]>(FOODS_BY_TAG_URL+tag);
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL+foodId);
  }

}
