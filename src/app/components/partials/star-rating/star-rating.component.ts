import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input()
  stars!: number;

  @Input()
  size: number = 1;

  get styles(){
    return{
      'width.rem':this.size,
      'hight.rem':this.size,
      'marginRight.rem':this.size/6,
    }
  }

  getStarImage(current: number): string{
    const preHalf = current - 0.5;
    const imgname = 
    this.stars >= current 
    ? 'star-full' 
    :this.stars >= preHalf 
    ? 'star-half' 
    :'star-empty';
    return `/assets/stars/${imgname}.svg`;
  }

}
