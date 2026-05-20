import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { IProduct } from '../../../interfaces/public/Product';
import { HomeService } from '../../../services/home.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule,
    MatProgressSpinnerModule, MatIconModule,
    FormsModule, MatDialogModule, CommonModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'],
})
export class HomeComponent implements OnInit {

  products = signal<IProduct[]>([]);
  loading = signal(false);
  errorMessage = signal('');
  searchQuery = '';

  homeService = inject(HomeService);

  ngOnInit(): void {
    this.homeService.getProducts().subscribe({
      next: (data: IProduct[]) => {
        console.log(data);
        this.products.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        this.errorMessage.set('Error al cargar los productos');
        this.loading.set(false);
      }
    });
  }

}
