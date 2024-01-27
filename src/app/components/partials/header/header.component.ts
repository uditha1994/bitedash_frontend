import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartQuantity = 0;
  // constructor(cartservice:CartService){
  //   cartservice.getCartObservable().subscribe((newCart)=>{
  //     this.cartQuantity = newCart.totalCount;
  //   })
  // }

  ngOnInit(): void {
  }
  
}
