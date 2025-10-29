// src/app/components/product/product-popup/product-popup.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { ProductImageHelper } from '../../../helpers/product-image-helper';

@Component({
    selector: 'app-product-popup',
    templateUrl: './product-popup.component.html',
    styleUrls: ['./product-popup.component.scss'],
    standalone: false
})
export class ProductPopupComponent implements OnInit, OnDestroy {
  currentProduct: Product | null = null;
  isOpen: boolean = false;
  quantity: number = 1;
  selectedColor: string = '';
  availableColors: string[] = [];
  loading: boolean = false;
  currentImageSrc: string = '';
  private subscription: Subscription | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // Suscripción al observable de producto seleccionado
    this.subscription = this.productService.selectedProduct$.subscribe(product => {
      if (product) {
        console.log('🛍️ ProductPopupComponent recibió producto:', product.nombre);
        this.currentProduct = product;
        this.isOpen = true;
        this.resetOptions();
        this.loadProductColors();
      } else {
        this.currentProduct = null;
        this.isOpen = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadProductColors(): void {
    if (!this.currentProduct) return;
    
    this.loading = true;
    
    this.productService.getProductColors(this.currentProduct.id).subscribe({
      next: (colors) => {
        this.loading = false;
        let filteredColors = (colors || []).filter(
          c => !!c && c.toLowerCase() !== "default"
        );

        // ✅ CORRECCIÓN: Lógica especial por nombre (case-insensitive)
        const nombre = (this.currentProduct?.nombre || "").toLowerCase();

        // ✅ Plug con corazón: SOLO caoba
        if (nombre.includes("plug con corazon") || nombre.includes("plug con corazón")) {
          console.log('🎯 Producto "Plug con corazón" detectado, forzando color caoba');
          filteredColors = ['caoba'];
        }
        // Otros productos específicos
        else if (
          nombre === "plug" ||
          nombre === "plug de silicona" ||
          nombre === "expander espiral" ||
          nombre === "set de dilatadores" ||
          nombre === "set de dilatadores 6 euros" ||
          nombre === "set de dilatadores 9 euros" ||
          nombre === "set de expanders curvados"
        ) {
          filteredColors = filteredColors.filter(c => c.toLowerCase() !== "default");
        }

        // Si se queda vacío, fallback "Estándar"
        if (filteredColors.length === 0) {
          filteredColors = ['Estándar'];
        }

        this.availableColors = filteredColors;
        this.selectedColor = filteredColors[0] || '';
        console.log('✅ Colores cargados:', this.availableColors, '| Seleccionado:', this.selectedColor);
        this.updateImageForSelectedColor();
      },
      error: (err) => {
        console.error('❌ Error cargando colores:', err);
        this.loading = false;
        
        // Fallback con la misma lógica
        const nombre = this.currentProduct?.nombre?.toLowerCase() || "";
        let fallbackColors: string[] = [];
        
        if (nombre.includes("plug con corazon") || nombre.includes("plug con corazón")) {
          console.log('🎯 Error en carga, forzando caoba para "Plug con corazón"');
          fallbackColors = ["caoba"];
        } else {
          fallbackColors = ProductImageHelper.getAvailableColors(this.currentProduct?.nombre || '')
            .filter(c => !!c && c.toLowerCase() !== "default");
        }

        if (fallbackColors.length === 0) fallbackColors = ['Estándar'];
        
        this.availableColors = fallbackColors;
        this.selectedColor = fallbackColors[0] || '';
        console.log('✅ Colores fallback:', this.availableColors);
        this.updateImageForSelectedColor();
      }
    });
  }

  /** ✅ CORREGIDO: Método que usa el helper para construir la ruta correcta */
  updateImageForSelectedColor(): void {
    if (!this.currentProduct) return;
    
    console.log('🖼️ Actualizando imagen para:', {
      producto: this.currentProduct.nombre,
      color: this.selectedColor
    });

    // ✅ USAR EL HELPER EN LUGAR DE CONSTRUCCIÓN MANUAL
    this.currentImageSrc = ProductImageHelper.getProductImageSrc(
      this.currentProduct, 
      this.selectedColor
    );
    
    console.log('✅ Imagen construida por helper:', this.currentImageSrc);
  }

  /** ✅ MEJORADO: Añadir al carrito con imagen correcta */
  addToCart(): void {
    if (!this.currentProduct) return;
    
    console.log('🛒 Añadiendo al carrito:', {
      producto: this.currentProduct.nombre,
      color: this.selectedColor,
      cantidad: this.quantity,
      imagen: this.currentImageSrc
    });

    // ✅ Crear una copia del producto con la imagen correcta
    const productWithImage = {
      ...this.currentProduct,
      imagenSeleccionada: this.currentImageSrc // Añadir campo extra con imagen
    };

    // Añadir al carrito
    this.cartService.addToCart(
      productWithImage,
      this.quantity,
      this.selectedColor
    );

    console.log(`✅ Producto añadido: ${this.currentProduct.nombre} - Color: ${this.selectedColor} - Cantidad: ${this.quantity}`);
    
    // Cerrar el popup
    this.closePopup();
  }

  /** Manejar cambio de color */
  onColorChange(): void {
    console.log('🎨 Color cambiado a:', this.selectedColor);
    this.updateImageForSelectedColor();
  }

  /** Cerrar el popup */
  closePopup(): void {
    console.log('🚪 Cerrando popup...');
    
    // Primero limpiar el producto actual para ocultar el modal
    this.currentProduct = null;
    this.isOpen = false;
    
    // Luego limpiar el servicio
    this.productService.clearSelectedProduct();
  }

  /** Incrementar cantidad */
  incrementQuantity(): void {
    if (this.quantity < 99) {
      this.quantity++;
    }
  }

  /** Decrementar cantidad (mínimo 1) */
  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  /** Resetear opciones al abrir el popup */
  private resetOptions(): void {
    this.quantity = 1;
    this.selectedColor = '';
    this.availableColors = [];
    this.currentImageSrc = '';
  }

  /** Método para obtener la imagen con el color seleccionado */
  getImagePath(): string {
    if (this.currentImageSrc) {
      return this.currentImageSrc;
    }

    if (!this.currentProduct) {
      return 'assets/images/default.jpg';
    }

    return ProductImageHelper.getProductImageSrc(this.currentProduct, this.selectedColor);
  }

  /** Verificar si hay múltiples colores disponibles */
  hasMultipleColors(): boolean {
    return this.availableColors.length > 1;
  }

  /** Obtener mensaje de colores disponibles */
  getColorsMessage(): string {
    if (this.availableColors.length <= 1) {
      return 'Color único disponible';
    }
    return `${this.availableColors.length} colores disponibles`;
  }
}
