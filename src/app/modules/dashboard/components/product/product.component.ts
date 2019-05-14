import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';
import { CartService } from '../../../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  finalCartVal:any = [];
  cartVal:any = [];
  constructor(private cartServ: CartService,  private toastr: ToastrService) { }

  @Input() product:Product;

  ngOnInit() {
    this.cartServ.cartValueChanged.subscribe((value:any) => {
      this.finalCartVal = value;
      this.cartServ.setCartValue(this.finalCartVal);
    });
  }

  handleClick(prod) {
    try {
      this.toastr.success('Item added to cart');
      if(this.finalCartVal.length === 0) {
        this.cartServ.updateCartValue(this.createObject(prod));
        return false;
      }
      const matchedIndex = this.finalCartVal.findIndex(value=>value.prodID === prod.prodID);
      if(matchedIndex >= 0) {
        this.finalCartVal[matchedIndex].quantity = ++this.finalCartVal[matchedIndex].quantity;
        this.cartServ.setCartValue(this.finalCartVal);
      } else {
        this.cartServ.updateCartValue(this.createObject(prod));
      }
    } catch(e) {
      this.toastr.error('There is some problem to add item in cart');
    }
  }

  createObject(prod) {
    return {
      prodID: prod.prodID,
      prodPrice: prod.prodPrice,
      quantity: 1,
      prodTitle: prod.prodTitle
    }
  }

}
