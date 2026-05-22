import { Component, inject, signal } from '@angular/core';
import { ICart } from '../../../../interfaces/privated/cart';
import { CartService } from '../../../../services/privated/cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cartdetail-component',
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './cartdetail-component.html',
  styleUrl: './cartdetail-component.scss',
})
export class CartdetailComponent {
  carts = signal<ICart[]>([]);
  loading = signal(false);
  errorMessage = signal('');

  cartService = inject(CartService);


}
