   import { CommonModule } from '@angular/common';
import { Component, input, inject } from '@angular/core';
import { CartService } from '../../services/favoris';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logo = input<string>('assets/images/products/logo-img.png');
  
  private cartService = inject(CartService);
  favoritesCount = this.cartService.favoritesCount;

  menuOpen = false;


  toggleMenu(){
    this.menuOpen = !this.menuOpen;
    
  }
  
}
