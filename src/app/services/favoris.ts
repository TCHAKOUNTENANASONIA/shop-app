import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root' // Rend le service disponible partout dans l'application
})
export class CartService {
  // 🌟 La source de vérité unique pour toute l'application
  private favorites = signal<Product[]>([]);

  // Un signal calculé automatiquement pour obtenir le nombre total
  public favoritesCount = signal<number>(0);

  addFavorite(product: Product) {
    // Évite d'ajouter le même produit plusieurs fois
    if (!this.favorites().some(p => p.id === product.id)) {
      this.favorites.update(list => [...list, product]);
      this.favoritesCount.set(this.favorites().length);
      console.log('Produit ajouté aux favoris ! Total =', this.favoritesCount());
    }
  }
}
