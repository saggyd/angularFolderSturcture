import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData:any = [];
  totalPrice:number = 0;

  constructor(private cartServ: CartService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cartData = this.cartServ.getCartValue();
    this.getTotalPrice(this.cartData);
    this.totalPrice
  }

  getTotalPrice(data) {
    for(let i=0; i<data.length;i++) {
      this.totalPrice = this.totalPrice + (data[i].prodPrice * data[i].quantity);
    }
  }

  checkoutHandler(event) {
    this.toastr.success('success');
  }

}
