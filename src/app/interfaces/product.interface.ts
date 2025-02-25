export interface Product{
    id: number;       // ID numérico
    name: string;     // Nombre del producto
    price: number;    // Precio como número
    inStock: boolean; // Disponibilidad como booleano
    onSale: boolean;  // En oferta como booleano
    image: string; 
}