import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, RouterLink],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.scss'],
})
export class HeaderComponent {}
