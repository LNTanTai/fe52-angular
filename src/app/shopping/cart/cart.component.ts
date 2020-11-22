import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart(product: any){
    //B1 san pham co ton tai trong gio hang
    const index = this.cartList.findIndex(
      item => item.id === product.id
    );

    //chua ton tai trong gio hang
    if (index === -1){
      this.cartList.push({...product, quality: 1})
      console.log(this.cartList);
      
    }
    else{
      this.cartList[index].quality += 1
      console.log(this.cartList);
      
    }
  }
}
