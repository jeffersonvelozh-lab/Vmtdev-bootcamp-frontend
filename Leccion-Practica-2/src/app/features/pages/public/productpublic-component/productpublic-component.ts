import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IProduct } from '../../../interfaces/public/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-productpublic-component',
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule,
    MatCardModule, MatIconModule],
  templateUrl: './productpublic-component.html',
  styleUrl: './productpublic-component.scss',
})
export class ProductpublicComponent implements OnInit{

  products = signal<IProduct[]>([]);
  loading = signal(false);
  errorMessage = signal('');
  searchQuery = signal('');

  homeService = inject(ProductService);


  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.loading.set(true);
    this.homeService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data.products);
        this.loading.set(false);
      },
      error: (error) => {
        this.errorMessage.set('Error al cargar los productos');
        this.loading.set(false);
      }
    });
  }
}
