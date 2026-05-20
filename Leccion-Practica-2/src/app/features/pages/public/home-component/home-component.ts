import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule,
    MatProgressSpinnerModule, MatIconModule,
    FormsModule, MatDialogModule, CommonModule, RouterLink],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'],
})
export class HomeComponent {
  loading = signal('');
  private router = inject(Router);

goToProducts(): void {
  this.router.navigate(['/products']);
}

  featuredProducts = [
  {
    id: 1,
    name: 'Laptop Gamer',
    description: 'Potencia extrema para gaming.',
    price: 1200,
    image: 'https://picsum.photos/400/250?random=1'
  },
  {
    id: 2,
    name: 'Auriculares RGB',
    description: 'Sonido envolvente profesional.',
    price: 150,
    image: 'https://picsum.photos/400/250?random=2'
  },
  {
    id: 3,
    name: 'Mouse Gamer',
    description: 'Precisión y velocidad.',
    price: 80,
    image: 'https://picsum.photos/400/250?random=3'
  }
];

}
