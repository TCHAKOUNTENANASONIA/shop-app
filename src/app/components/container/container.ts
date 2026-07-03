import { Component, output } from '@angular/core'; 
import { ProductList } from '../product-list/product-list';
import { Product } from '../../models/product'; 

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  // 🌟 SÉCURITÉ : On déclare explicitement l'émetteur de type Product
  favoriteAdded = output<Product>(); 
  
  // Cette méthode reçoit le produit de la liste et le renvoie proprement à l'App
  onFavoriteAdded(product: Product) { 
    this.favoriteAdded.emit(product); 
  } 
}
