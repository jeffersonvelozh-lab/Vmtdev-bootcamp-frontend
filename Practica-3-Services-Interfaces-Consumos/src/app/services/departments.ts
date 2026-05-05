import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departments } from '../IDeparment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsServices {
  private apiUrl = `${enviroment.apiUrl}/departments`;

  constructor(private _http: HttpClient) {}

  getAll(): Observable<Departments[]> {
    return this._http.get<Departments[]>(this.apiUrl);
  }

  getById(id: string): Observable<Departments> {
    return this._http.get<Departments>(`${this.apiUrl}/${id}`);
  }

  crearDepartment(departments: Partial<Departments>): Observable<Departments> {
      return this._http.post<Departments>(`${this.apiUrl}`, departments);
    }

    actualizacionDepartment(id: string, departments: Partial<Departments>): Observable<Departments> {
      return this._http.put<Departments>(`${this.apiUrl}/${id}`, departments);
    }

    eliminarDepartment(id: string): Observable<void> {
      return this._http.delete<void>(`${this.apiUrl}/${id}`);
    }




}
