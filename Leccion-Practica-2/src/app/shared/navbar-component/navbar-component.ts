import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [RouterLink, MatTabsModule,
    CommonModule, MatIconModule, MatToolbarModule],
  templateUrl: './navbar-component.html',
  styleUrls: ['./navbar-component.scss'],
})
export class NavbarComponent {

  isCollapsed = signal(false);

  toggleSidebar() {
    this.isCollapsed.update(v => !v);
  }
}
