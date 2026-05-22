import { Component, inject, OnInit, signal } from '@angular/core';
import { ICart } from '../../../interfaces/privated/cart';
import { CartService } from '../../../services/privated/cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-component',
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule,
    MatCardModule, MatIconModule],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss',
})
export class CartComponent implements OnInit {

  carts = signal<ICart[]>([]);
  loading = signal(false);
  errorMessage = signal('');

  cartService = inject(CartService);


  ngOnInit(): void {
    this.cargarCarritos();
  }

  cargarCarritos() {
    this.loading.set(true);
    this.cartService.get().subscribe({
      next: (data) => {
        this.carts.set(data.carts);
        this.loading.set(false);
      },
      error: (error) => {
        this.errorMessage.set('Error al cargar los carritos');
        this.loading.set(false);
      }
    });
  }

}
