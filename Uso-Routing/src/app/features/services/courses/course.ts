import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { course } from '../../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = `${enviroment.apiUrl}/courses`;
  private http = inject(HttpClient);

  getCourses(): Observable<course[]> {
    return this.http.get<course[]>(`${this.apiUrl}`);
  }

  getById(id: string): Observable<course> {
    return this.http.get<course>(`${this.apiUrl}/${id}`);
  }

}
