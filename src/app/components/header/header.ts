   import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logo = input<string>('assets/images/products/logo-img.png');
  favoritesCount = input(0);
  menuOpen = false;

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
    console.log('État du menu mobile :', this.menuOpen);
  }
  
}
