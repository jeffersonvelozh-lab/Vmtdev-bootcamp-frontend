import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Materia {
  nombre: string;
  creditos: number;
  aprobada: boolean;
}

@Component({
  selector: 'app-body-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './body-component.html',
  styleUrl: './body-component.scss',
})
export class BodyComponent {
  busqueda: string = '';
  creditos: number = 45;

  materias: Materia[] = [
    { nombre: 'Cálculo',       creditos: 4, aprobada: true  },
    { nombre: 'Física',        creditos: 4, aprobada: false },
    { nombre: 'Programación',  creditos: 3, aprobada: true  },
    { nombre: 'Base de Datos', creditos: 3, aprobada: false },
    { nombre: 'Inglés',        creditos: 2, aprobada: true  },
  ];

  get porcentaje(): number {
    return Math.round((this.creditos / 120) * 100);
  }

  get colorBarra(): string {
    if (this.porcentaje < 40) return 'red';
    if (this.porcentaje < 70) return 'orange';
    return 'green';
  }

  sumar(): void {
    if (this.creditos < 120) this.creditos = Math.min(this.creditos + 10, 120);
  }

  restar(): void {
    if (this.creditos > 0) this.creditos = Math.max(this.creditos - 10, 0);
  }
}
