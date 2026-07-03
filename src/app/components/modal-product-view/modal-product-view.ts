import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import {DatePipe} from '@angular/common';

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

  onCloseClick(){
    this.close.emit();
  }

  onAddToFavorites() { 
    const p = this.product(); 
    if (p) { 
      this.favoriteAdded.emit(p); 
    } 
  } 
}
