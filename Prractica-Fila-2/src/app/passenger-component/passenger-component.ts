import { Component, OnInit } from '@angular/core';
import { Passengers } from '../Interfaces/Ipassengers';
import { Passengerservices } from '../services/passengers';

@Component({
  selector: 'app-passenger-component',
  imports: [],
  templateUrl: './passenger-component.html',
  styleUrl: './passenger-component.scss',
})
export class PassengerComponent implements OnInit {

  passenger: Passengers[] = [];
  errorMessage: string = '';
  loading = false;

    constructor(private passengerServices: Passengerservices) {}

    ngOnInit(): void {
      this.passengerServices.getPassengers().subscribe({
        next: (data) => this.passenger = data,
        error: () => this.errorMessage ='Error al cargar pasajeros'
      });
    }

    agregarPassenger() {
      const payload : Partial<Passengers> = {
        name: 'JV-Pasajero-1',
        email: 'pasajero1@mail.com',
        nationality: 'Ecuatoriano',
      };

      this.passengerServices.crearPassenger(payload).subscribe({
        next: (nuevo) => {
          this.passenger = [...this.passenger, nuevo];
          },
        error: () => {
          this.errorMessage = 'Error al agregar pasajero';
          }
        });
    }

  editarPassenger(){
      const pasajero = this.passenger[0];
      if (!pasajero) return;

      const payload : Partial<Passengers> = {
        name: 'pasajero editado',
        email: 'editado@mail.com',
        nationality: 'Ecuatoriano',
      };

      this.passengerServices.actualizacionPassenger(pasajero.id, payload).subscribe({
        next: (actualizado) => {
          this.passenger = this.passenger.map(e => e.id == pasajero.id ? actualizado : e);
          },
          error: () => {
          this.errorMessage = 'Error al editar pasajero';
          }
      });
  }

    eliminarPassenger(id: string) {
      this.passengerServices.eliminarPassenger(id).subscribe({
        next: () => {
          this.passenger = this.passenger.filter(e => e.id !== id);
        },
        error: () => {
          this.errorMessage = 'Error al eliminar pasajero';
        }
      });
    }
}
