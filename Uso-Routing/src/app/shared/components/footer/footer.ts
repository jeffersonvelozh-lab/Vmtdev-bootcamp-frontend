import { Component } from '@angular/core';
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: 'app-footer',
  imports: [MatDividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear: number = new Date().getFullYear();
  copyrightMessage: string = "© Todos los derechos reservados";

  generateCopyright(): void {
    this.copyrightMessage = "";
  }

}
