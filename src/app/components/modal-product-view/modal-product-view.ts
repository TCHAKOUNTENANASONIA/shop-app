import { Component, input, output, inject } from '@angular/core';
import { Product } from '../../models/product';
import {DatePipe} from '@angular/common';
import { CartService } from '../../services/favoris';

@Component({
  selector: 'app-modal-product-view',
  imports: [DatePipe],
  templateUrl: './modal-product-view.html',
  styleUrl: './modal-product-view.css',
})
export class ModalProductView {
  // INPUT recoit le produit à afficher
  product = input<Product>();

  // OUTPUT signal au parent de fermer le modal
  close = output<void>();

  favoriteAdded = output<Product>();

  private cartService = inject(CartService);
  onCloseClick(){
    this.close.emit();
  }

  onAddToFavorites() { 
    const p = this.product(); 
    if (p) { 
      this.cartService.addFavorite(p) 
    } 
  } 
}
