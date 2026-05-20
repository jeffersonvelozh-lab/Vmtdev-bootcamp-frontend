import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { enviroment } from "../../../Environment/environment";
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/IProducts";


@Injectable({providedIn: 'root'})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly url = `${enviroment.apiUrl}/products`;

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.url, product);
  }

  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.url}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
