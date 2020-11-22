import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Output() onAddToCart = new EventEmitter()
  @Input() product: any

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.onAddToCart.emit(this.product)
  }
}
