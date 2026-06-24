import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-container',
  standalone:true,
  imports: [ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  
}
