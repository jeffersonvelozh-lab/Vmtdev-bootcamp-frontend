import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from '../../interfaces/Student';

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  private apiUrl = `${enviroment.apiUrl}/students`;
  private http = inject(HttpClient);

  getStudents(): Observable<student[]> {
    return this.http.get<student[]>(`${this.apiUrl}`);
  }

  getById(id: string): Observable<student> {
    return this.http.get<student>(`${this.apiUrl}/${id}`);
  }

  crearStudent(student: Partial<student>): Observable<student> {
    return this.http.post<student>(`${this.apiUrl}`, student);
  }

  actualizacionStudent(id: string, student: Partial<student>): Observable<student> {
    return this.http.put<student>(`${this.apiUrl}/${id}`, student);
  }

  eliminarStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/students/${id}`);
  }

}
