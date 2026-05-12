import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatButtonModule, MatDividerModule, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {}
