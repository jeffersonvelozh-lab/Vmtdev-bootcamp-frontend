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
import { IProduct } from '../../../interfaces/public/Product';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule,
    MatProgressSpinnerModule, MatIconModule,
    FormsModule, MatDialogModule, CommonModule, MatDividerModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'],
})
export class HomeComponent {
  products = signal<IProduct[]>([]);
  errorMessage = signal('');
  loading = signal(false);


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
  },
  {
    id: 4,
    name: 'Mouse Gamer',
    description: 'Precisión y velocidad.',
    price: 80,
    image: 'https://picsum.photos/400/250?random=3'
  },
  {
    id: 5,
    name: 'Mouse Gamer',
    description: 'Precisión y velocidad.',
    price: 80,
    image: 'https://picsum.photos/400/250?random=3'
  },
  {
    id: 6,
    name: 'Mouse Gamer',
    description: 'Precisión y velocidad.',
    price: 80,
    image: 'https://picsum.photos/400/250?random=3'
  }
];

}
