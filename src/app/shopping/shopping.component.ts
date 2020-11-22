import { Component, OnInit, ViewChild } from '@angular/core';
import {CartComponent} from "./cart/cart.component"

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  @ViewChild('cart') cartComponent = new CartComponent()

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart(product: any){
    // ViewChild toi Cart la goi ham handleAddToCart
    this.cartComponent.handleAddToCart(product)
  }
}
