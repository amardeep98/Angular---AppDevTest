import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {

  product:Product;
  cartButtonText:string = "ADD TO CART";
  cartButtonClick:boolean = false;
  submitted:boolean = true;
  constructor(private route:ActivatedRoute, private cart:CartService) { }

  ngOnInit(): void {
    //code to retrieve product - capturing URL
    //service can be injected into the component class by calling its object in constructor
    const routeParams = this.route.snapshot.paramMap;
    const Id = Number(routeParams.get("productId"));
    this.product = products.find(prod => prod.id===Id);
  }

  addToCart(){
    this.cartButtonText = "ADDED TO CART";
    this.cartButtonClick = true;
    this.submitted = false;
    this.cart.addProductsToCart(this.product);
  }
}
