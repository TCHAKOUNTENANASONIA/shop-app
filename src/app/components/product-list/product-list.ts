import { Component, signal,output} from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product';
import { CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { ModalProductView } from '../modal-product-view/modal-product-view';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem, ModalProductView, CurrencyPipe,DatePipe, JsonPipe, UpperCasePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  //products: Product[]= [
    //{ id:1, image: 'assets/images/products/img1.jpg', nom:'ROBE', prix: 20000},
    //{ id:2, image: 'assets/images/products/img4.jpg', nom: 'T-SHIRT', prix: 5000},
    //{ id:3, image: 'assets/images/products/img3.jpg', nom: 'PANTALON', prix: 10000},
    //{ id:4, image: 'assets/images/products/img2.jpg', nom: 'ROBE', prix: 15000},
    //{ id:5, image: 'assets/images/products/img5.jpg', nom: 'ROBE', prix: 12000},
    //{ id:6, image: 'assets/images/products/img6.jpg', nom: 'ROBE', prix: 15000},
    //{ id:7, image: 'assets/images/products/img7.jpg', nom: 'ROBE', prix: 10000},
    //{ id:8, image: 'assets/images/products/img8.jpg', nom: 'CHAUSSURE', prix: 8000}



  products = signal<Product[]>([
    {
      id: 1,
      name: 'Robe traditionnelle',
      description: 'Robe bleu nuit camerounais, coupe élégante pour cérémonie',
      soldPrice: 22000,
      regularPrice: 28000,
      imageUrl:'assets/images/products/image1.webp',
      createAt: new Date('2026-01-15'),
      categories: ['vêtement', 'femme', 'traditionnel']

    },

    {
      id: 2,
      name: 'Bijoux traditionnels',
      description: 'Coiffe + bijoux assortis en perles, original',
      soldPrice: 10000,
      regularPrice: 12000,
      imageUrl:'assets/images/products/image3.jpg',
      createAt: new Date('2026-02-10'),
      categories: ['accessoire', 'artisanat']

    },

    {
      id: 3,
      name: 'Robe de soirée Duo',
      description: 'Tenue assortie couple, chic et fluide pour soirée',
      soldPrice: 22000,
      regularPrice: 28000,
      imageUrl:'assets/images/products/image2.jpg',
      createAt: new Date('2026-01-15'),
      categories: ['vêtement', 'femme', 'moderne']

    },

    {
      id: 4,
      name: 'Tongue Bamiléké ',
      description: 'Sandale artisanale perles + cauris, motifs traditionnels',
      soldPrice: 22000,
      regularPrice: 28000,
      imageUrl:'assets/images/products/image4.webp',
      createAt: new Date('2026-01-15'),
      categories: ['chassure', 'femme', 'traditionnel']

    },

    {
      id: 5,
      name: 'Tenue Royale',
      description: 'Ensemble chef Bamiléké tissé main, broderies riches',
      soldPrice: 22000,
      regularPrice: 28000,
      imageUrl:'assets/images/products/image5.jpg',
      createAt: new Date('2026-01-15'),
      categories: ['vêtement', 'femme', 'traditionnel']

    },

    {
      id: 6,
      name: 'Robe Wax Prestige',
      description: 'Robe bustier noire + écharpe wax, élégance afro-moderne',
      soldPrice: 22000,
      regularPrice: 28000,
      imageUrl:'assets/images/products/image6.jpg',
      createAt: new Date('2026-01-15'),
      categories: ['vêtement', 'femme', 'traditionnel']

    },

    {
      id: 7,
      name: 'Cabas Wax',
      description: 'Grand sac wax motifs bamiléké, anses dorées XXL',
      soldPrice: 22000,
      regularPrice: 28000,
      imageUrl:'assets/images/products/image7.jpg',
      createAt: new Date('2026-01-15'),
      categories: ['vêtement', 'femme', 'traditionnel']

    },

    {
      id: 8,
      name: 'Eventail coloré',
      description: 'Eventails tissés main rouge/violet/bleu , afro-chic',
      soldPrice: 22000,
      regularPrice: 28000,
      imageUrl:'assets/images/products/image8.jpg',
      createAt: new Date('2026-01-15'),
      categories: ['vêtement', 'femme', 'traditionnel']

    },
    ]
  )

  isDisplayModal = signal(false);
  modalProduct = signal<Product | undefined>(undefined);

  // NOUVEAU output : retransmet vers App 
  favoriteAdded = output<Product>(); 
  
  onDisplayProductViewModal(product: Product){
    this.modalProduct.set(product);
    this.isDisplayModal.set(true);
  }

  onCloseModal(){
    this.isDisplayModal.set(false);
    this.modalProduct.set(undefined);
  }

  
  // Méthode appelée quand le modal ajoute aux favoris 
  onFavoriteAdded(product: Product) { 
    console.log('Favori ajouté :', product.name); 
    this.favoriteAdded.emit(product); 
  }

    
}
