import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passengers } from '../Interfaces/Ipassengers';

@Injectable({
  providedIn: 'root',
})
export class Passengerservices {

  private apiUrl = `${enviroment.apiUrl}/passengers`;
  private http = inject(HttpClient);

  getPassengers(): Observable<Passengers[]> {
    return this.http.get<Passengers[]>(`${this.apiUrl}`);
  }

  crearPassenger(passenger: Partial<Passengers>): Observable<Passengers> {
      return this.http.post<Passengers>(`${this.apiUrl}`, passenger);
    }

    actualizacionPassenger(id: string, passenger: Partial<Passengers>): Observable<Passengers> {
      return this.http.put<Passengers>(`${this.apiUrl}/${id}`, passenger);
    }

    eliminarPassenger(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
