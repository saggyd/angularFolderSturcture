import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalCartCount: number = 0;
  cartValue:any = [];
  updatedCart:any= [];

  cartValueChanged: Subject<number> = new Subject<number>();
  constructor() {}

  updateCartValue(val) {
      this.cartValue.push(val);
       console.log('inside cart service',this.cartValue);
      this.cartValueChanged.next(this.cartValue);
  }

  setCartValue(data) {
    this.updatedCart = data;
  }

  getCartValue():any {
    return this.updatedCart;
  }
}
