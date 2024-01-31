import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit{
  order:Order = new Order();
  checkoutForm!: FormGroup;

  constructor(cartService:CartService, 
    private formBuilder: FormBuilder, 
    private userService:UserService,
    private tostrService:ToastrService,
    private orderService:OrderService,
    private router:Router){
      const cart = cartService.getCart();
      this.order.items = cart.items;
      this.order.totalPrice = cart.totalPrice;
    }

  ngOnInit(): void {
    let {name, address} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name, Validators.required],
      address:[address, Validators.required]
    });
  }

  get fc(){
    return this.checkoutForm.controls;
  }

  createOder(){
    if(this.checkoutForm.invalid){
      this.tostrService.warning('Please fill the inputs','Invalid Inputs');
      return;
    }

    if(!this.order.addressLatLng){
      this.tostrService.warning('Please select your location','Location');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.addres = this.fc.address.value;

    this.orderService.create(this.order).subscribe({
      next:()=>{
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse) =>  {
        this.tostrService.error(errorResponse.error,'Cart');
      }
    })
  }

}
