import { Component, OnInit } from '@angular/core';
import { FlightsServices } from '../services/flights';
import { Flights } from '../Interfaces/Iflights';

@Component({
  selector: 'app-flight-component',
  imports: [],
  templateUrl: './flight-component.html',
  styleUrl: './flight-component.scss',
})
export class FlightComponent implements OnInit {

  flights: Flights[] = [];
  erroMessage: string = '';
  loading = false;

  constructor(private flightsService: FlightsServices) {}

  ngOnInit(): void {
    this.flightsService.getFlights().subscribe({
      next: (data) => this.flights = data,
      error: () => this.erroMessage ='Error al cargar los vuelos'
    });
  }

  agregarFlights() {
    const payload : Partial<Flights> = {
      price: '500',
      departure: '2026-12-04T05:03:51.311Z',
      destination: 'Quito',
      origin: 'Guayaquil',
      flightNumber: '751335152',
    };

    this.flightsService.crearFlight(payload).subscribe({
      next: (nuevo) => {
        this.flights = [...this.flights, nuevo];
        },
      error: () => {
        this.erroMessage = 'Error al agrgar vuelo';
        }
      });
  }

  editarflights(){
    const vuelo = this.flights[0];
    if (!vuelo) return;

    const payload : Partial<Flights> = {
      price: '500',
      departure: '2026-12-04T05:03:51.311Z',
      destination: 'Quito editado',
      origin: 'Guayaquil editado',
      flightNumber: '751335152',
    };

    this.flightsService.actualizacionFlights(vuelo.id, payload).subscribe({
          next: (actualizado) => {
            this.flights = this.flights.map(e => e.id == vuelo.id ? actualizado : e);
          },
          error: () => {
            this.erroMessage = 'Error al editar vuelo';
          }
        });
      }

  eliminarDepartment(id: string) {
    this.flightsService.eliminarFlights(id).subscribe({
      next: () => {
        this.flights = this.flights.filter(e => e.id !== id);
      },
      error: () => {
        this.erroMessage = 'Error al eliminar vuelo';
      }
    });
  }

}
