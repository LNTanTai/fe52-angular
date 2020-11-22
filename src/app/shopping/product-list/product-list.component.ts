import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() onAddToCart = new EventEmitter()

  shoppingList: any[] = [
    {id: 1, name: "Shoe", price: 100, image: 'assets/image/Topo-Athletic-Ultraventure_2.jpg'},
    {id: 2, name: "Coat", price: 32, image: 'assets/image/burberry-beige-heritage-trench-coat-323568-9f8fa35dc523149a9ad92f8d08ad610e8e0a602e.jpg' },
    {id: 3, name: "Watch", price: 230, image: 'assets/image/MY9K2_VW_34FR+watch-44-stainless-gold-cell-6s_VW_34FR_WF_CO.jpg' },
    {id: 4, name: "Jacket", price: 450, image: 'assets/image/mens-black-jacket-500x500.jpg' },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart(product: any){
    this.onAddToCart.emit(product);
  }

}
