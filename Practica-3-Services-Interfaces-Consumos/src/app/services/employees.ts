import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../IEmployees';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesServices {
  private apiUrl = enviroment.apiUrl;
  private _http = inject(HttpClient);

  getEmployees(): Observable<Employees[]> {
    return this._http.get<Employees[]>(`${this.apiUrl}/employees`);
  }

  getById(id: string): Observable<Employees> {
    return this._http.get<Employees>(`${this.apiUrl}/employees/${id}`);
  }

  crearEmployee(employee: Partial<Employees>): Observable<Employees> {
    return this._http.post<Employees>(`${this.apiUrl}/employees`, employee);
  }

  actualizacionEmployee(id: string, employee: Partial<Employees>): Observable<Employees> {
    return this._http.put<Employees>(`${this.apiUrl}/employees/${id}`, employee);
  }

  eliminarEmployee(id: string): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/employees/${id}`);
  }

}

