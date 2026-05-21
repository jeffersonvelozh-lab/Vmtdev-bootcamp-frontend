import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar-component/navbar-component';
import { HeaderComponent } from './shared/header-component/header-component';
import { FooterComponent } from './shared/footer-component/footer-component';
import { AuthService } from './features/services/privated/auth.service';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FooterComponent, MatDivider, MatDivider],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Leccion-Practica-2');
  authService = inject(AuthService);
}
