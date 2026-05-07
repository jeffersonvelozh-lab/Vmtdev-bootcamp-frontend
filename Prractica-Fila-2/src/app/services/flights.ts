import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flights } from '../Interfaces/Iflights';

@Injectable({
  providedIn: 'root',
})
export class FlightsServices {
  private apiUrl = `${enviroment.apiUrl}/flights`;
  private http = inject(HttpClient);

  getFlights(): Observable<Flights[]> {
    return this.http.get<Flights[]>(`${this.apiUrl}`);
  }

  crearFlight(fligths: Partial<Flights>): Observable<Flights> {
      return this.http.post<Flights>(`${this.apiUrl}`, fligths);
    }

    actualizacionFlights(id: string, flights: Partial<Flights>): Observable<Flights> {
      return this.http.put<Flights>(`${this.apiUrl}/${id}`, flights);
    }

    eliminarFlights(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

}
