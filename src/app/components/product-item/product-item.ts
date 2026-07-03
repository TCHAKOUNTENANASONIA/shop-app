import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, input, Input, output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  imports: [ DatePipe, UpperCasePipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  //@Input() product: any;
  //onImageError(event: Event){
    //(event.target as HTMLImageElement).src='assets/images/placeholder.jpg'
  //}

  //product=  input<Product>();

  product = input.required<Product>();

  //productClicked = output<Product>();
  displayProductViewModal = output<Product>();
  onProductClick(){
    this.displayProductViewModal.emit(this.product());
  }
  
  
}
