import { Component, OnInit, OnDestroy } from '@angular/core';
//import { CartService } from '../../../modules/shared/services/cart.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  cartValue:number;
  constructor( private cartServ: CartService) { }

  ngOnInit() {
    this.cartServ.cartValueChanged.subscribe((value:any) => {
      this.cartValue = value.length;
      console.log('inside header',value);
    });
  }

  ngOnDestroy() {
    this.cartServ.cartValueChanged.unsubscribe();
  }

}
