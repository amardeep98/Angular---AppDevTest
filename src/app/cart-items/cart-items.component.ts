import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  products:Product[] = this.cart.getProducts();
  subTotal:number;
  newPrice:number;
  shippingPrice:number = 20;
  totalPrice:number = 0;

  constructor(private cart:CartService) { }
  
  ngOnInit(): void {
    
    this.updateSubtotal();
  }

  //sub total logic - scenario 1
  updateSubtotal(){
    this.subTotal = 0;
    for(let i=0; i<this.products.length; i++){
      this.subTotal = this.subTotal + this.products[i].price;
    }
    this.totalPrice = this.subTotal+this.shippingPrice;
  }


  //on key up - scenario 2
  onKey(product:Product, quantity:number){
    if(quantity>0){
      this.newPrice = quantity * product.price;
      //this.updateSubtotal();
      this.subTotal = this.subTotal - product.price + this.newPrice;
      this.totalPrice = this.subTotal+this.shippingPrice;
      console.log("newPrice:{0} ",+this.newPrice, "subTotal:{1}"+this.subTotal);
    }
  }

  deleteProduct(product:Product){
    const productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);
    this.updateSubtotal();
    console.log("hi there");
  }
}
