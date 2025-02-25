import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsCardComponent } from './components/products-card/products-card/products-card.component';
import { NgFor } from '@angular/common';
import { Product } from './interfaces/product.interface'; 
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-root',
  imports: [ProductsCardComponent,NgFor,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Products';
  selectedProduct: Product | null = null; 

  products : Product[] = [
      { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' },
      { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' },
      { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, image: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sS7PPQ7XpuZeR0JhNWgJCXmPShYvadLDQw&s' },
      { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, image: 'https://img.freepik.com/foto-gratis/asiento-electrodomesticos-interior-signo-ergonomica_1172-512.jpg' },
      { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, image: 'https://www.redlemon.com.mx/cdn/shop/files/01_65d920cf-4adc-4d01-996d-e02a28c0e6dd.jpg' },
      { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, image: 'https://grupoherza.com.mx/wp-content/uploads/2023/02/Disco-Duro-1-TB-WD.png' },
      { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyx6rLJFVCDlwTfIkGtj00VJo_xxvLQAJjg&s' },
      { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnF-56vDh6_wA22IzJHD_T9XhvhQBhmzCbVA&s' },
      { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }
  ];

    // Método que recibe el producto seleccionado
    selectProduct(product: Product):void {
      console.log('Producto Enviado:', product);
      this.selectedProduct = product;
    }

}

