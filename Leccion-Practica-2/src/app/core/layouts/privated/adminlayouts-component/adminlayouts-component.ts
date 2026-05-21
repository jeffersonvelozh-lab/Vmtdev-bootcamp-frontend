import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../../features/services/privated/auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

interface NavItem {
    icon: string;
    label: string;
    route: string;
}


@Component({
  selector: 'app-adminlayouts-component',
  imports: [RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTooltipModule],
  templateUrl: './adminlayouts-component.html',
  styleUrl: './adminlayouts-component.scss',
})
export class AdminlayoutsComponent {
  private auth = inject(AuthService);
    private router = inject(Router);

    collapsed = signal(false);

    navItems: NavItem[] = [
        { icon: 'dashboard', label: 'Dashboard', route: '/admin/dashboard' },
        { icon: 'shopping_bag', label: 'Productos', route: '/admin/products' }
    ];

    toggle() {
        this.collapsed.set(!this.collapsed());
    }

    logout() {
        this.auth.logout(this.router);
    }
}
