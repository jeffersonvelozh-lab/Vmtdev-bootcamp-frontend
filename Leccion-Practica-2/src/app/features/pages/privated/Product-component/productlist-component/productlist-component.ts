import { Component, inject, signal } from '@angular/core';
import { IProduct } from '../../../../interfaces/public/Product';
import { ProductService } from '../../../../services/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ProductformComponent } from '../../productform-component/productform-component';

@Component({
  selector: 'app-productlist-component',
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule, MatIconModule],
  templateUrl: './productlist-component.html',
  styleUrl: './productlist-component.scss',
})
export class ProductlistComponent {
  products = signal<IProduct[]>([]);
  loading = signal(false);
  errorMessage = signal('');
  searchQuery = signal('');

  homeService = inject(ProductService);
  constructor(private dialogRef: MatDialog) {}

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

  abrirFormulario(product: IProduct | null = null){
    const dialogRef = this.dialogRef.open(ProductformComponent, {
      width: '480px',
      data: product
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cargarProductos();
      }
    });

  }
}
