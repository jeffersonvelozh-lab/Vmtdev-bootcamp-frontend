import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './footer-component.html',
  styleUrls: ['./footer-component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
