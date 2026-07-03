import { Component, signal } from '@angular/core';
import { Product } from './models/product'; 
import { Header } from './components/header/header';
import { Container } from './components/container/container';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Container, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  favoritesCount = signal(0); 
  
  onFavoriteAdded(product: Product) { 
    this.favoritesCount.update((count: number) => count + 1);  
    console.log('Total favoris :', this.favoritesCount()); 
  } 
}
