import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
  title:string = "Product Details";
  products:Product[] = products; 
  isUnchanged:boolean=true;
  ngOnInit(): void {
  }

  clickMe(product:Product){
    window.alert(product.name+" is available in your location")
  }

  enableBuying(){
    this.isUnchanged = !this.isUnchanged;
  }

}
