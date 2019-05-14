import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  sortingName: string;
  isDesc: boolean;

  constructor(private prodServ: ProductService) { }

  productArr = [
    {
      prodTitle: 'Product1',
      prodID: 101,
      prodDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      prodPrice: 440
    },
    {
      prodTitle: 'Product2',
      prodID: 102,
      prodDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      prodPrice: 180
    },
    {
      prodTitle: 'Product3',
      prodID: 103,
      prodDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      prodPrice: 6700
    },
    {
      prodTitle: 'Product4',
      prodID: 104,
      prodDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      prodPrice: 180
    }
  ];

  ngOnInit() {
    this.prodServ.setProduct(this.productArr);
  }

  sort(event, name: string): void {
    event.preventDefault();
    if (name && this.sortingName !== name) {
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.sortingName = name;
  }

}
