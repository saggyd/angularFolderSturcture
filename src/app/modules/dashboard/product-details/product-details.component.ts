import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products= [];
  product = {};
  id: number;

  constructor(private prodServ: ProductService, private activatedRoute: ActivatedRoute) { 
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }
  

  ngOnInit() {
    this.products = this.prodServ.getProducts();
    this.product = this.products.filter(obj => {
      return obj.prodID === this.id;
    });
    console.log(this.product[0]);
  }

}
