import { Component, inject, OnInit, signal } from '@angular/core';
import { ICart } from '../../../../interfaces/privated/cart';
import { CartService } from '../../../../services/privated/cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartFormComponent } from '../cart-form-component/cart-form-component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  constructor(private dialogRef: MatDialog) {}


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

  goToCartDetails(id: number): void {
    this.router.navigate(['/carts', id]);
  }

  abrirFormulario(cart: ICart | null = null){
      const dialogRef = this.dialogRef.open(CartFormComponent, {
        width: '480px',
        data: cart,
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.cargarCarritos();
        }
      });
    }

    delete(cart: ICart) {
            if (!confirm(`¿Eliminar "${cart.userId}"?`)) return;
            this.cartService.delete(cart.id).subscribe({
                next: () => {
                    this.carts.update((list) => list.filter((p) => p.id !== cart.id));
                    this.snackBar.open('Producto eliminado', 'Cerrar', { duration: 3000 });
                },
                error: () => this.snackBar.open('Error al eliminar', 'Cerrar', { duration: 3000 }),
            });
        }

}
