import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../model/product/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[]= [
    { id:1, image: 'assets/images/products/img1.jpg', nom:'ROBE', prix: 20000},
    { id:2, image: 'assets/images/products/img4.jpg', nom: 'T-SHIRT', prix: 5000},
    { id:3, image: 'assets/images/products/img3.jpg', nom: 'PANTALON', prix: 10000},
    { id:4, image: 'assets/images/products/img2.jpg', nom: 'ROBE', prix: 15000},
    { id:5, image: 'assets/images/products/img5.jpg', nom: 'ROBE', prix: 12000},
    { id:6, image: 'assets/images/products/img6.jpg', nom: 'ROBE', prix: 15000},
    { id:7, image: 'assets/images/products/img7.jpg', nom: 'ROBE', prix: 10000},
    { id:8, image: 'assets/images/products/img8.jpg', nom: 'CHAUSSURE', prix: 8000}

  ];
}
