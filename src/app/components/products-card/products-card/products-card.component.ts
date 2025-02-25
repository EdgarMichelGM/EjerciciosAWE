import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common'



@Component({
  selector: 'app-products-card',
  imports: [CommonModule], 
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent {
  @Output() 
  selectProductEvent = new EventEmitter<Product>();  // Emitir el producto seleccionado cuando se haga clic
  
  @Input()  
  product: Product = {
    id: 0, // ID numérico, puedes cambiarlo según sea necesario
    name: "",
    price: 0, // Precio como número
    inStock: false, // Estado booleano
    onSale: false, // Estado booleano
    image: "" // URL vacía por defecto
  }

  isSelected: boolean = false; // Solo indica si está seleccionado o no
  selectProduct() {
    this.isSelected = !this.isSelected;
    console.log('Producto seleccionado:', this.product); 
    this.selectProductEvent.emit(this.product);  // Emitimos el producto seleccionado
  }

}