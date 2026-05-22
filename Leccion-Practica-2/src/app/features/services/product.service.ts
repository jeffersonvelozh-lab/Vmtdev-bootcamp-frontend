import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/enviroment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct, IProductResponse } from "../interfaces/public/Product";

@Injectable({providedIn: 'root'
})
export class ProductService {
  private url = `${environment.apiUrl}/products`;
  private http = inject(HttpClient);

  getProducts(): Observable<IProductResponse> {
    return this.http.get<IProductResponse>(this.url);
  }

  getById(id: number): Observable<IProductResponse> {
    return this.http.get<IProductResponse>(`${this.url}/${id}`);
  }

  create(payload: IProductResponse): Observable<IProductResponse> {
    return this.http.post<IProductResponse>(this.url, payload);
  }

  update(id: number, payload: IProductResponse): Observable<IProductResponse> {
    return this.http.put<IProductResponse>(`${this.url}/${id}`, payload);
  }

  delete(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.url}/${id}`);
  }

}
