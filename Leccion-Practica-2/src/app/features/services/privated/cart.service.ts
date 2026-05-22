import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/enviroment";
import { HttpClient } from "@angular/common/http";
import { ICart } from "../../interfaces/privated/cart";
import { Observable } from "rxjs";
import { ICartsResponse } from "../../interfaces/privated/cart.responnse";

@Injectable({providedIn: 'root'
})
export class CartService {
  private url = `${environment.apiUrl}/carts`;
  private http = inject(HttpClient);

  get(): Observable<ICartsResponse> {
    return this.http.get<ICartsResponse>(this.url);
  }

  getById(id: number): Observable<ICartsResponse> {
      return this.http.get<ICartsResponse>(`${this.url}/${id}`);
    }

    create(payload: ICart): Observable<ICart> {
      return this.http.post<ICart>(this.url, payload);
    }

    update(id: number, payload: ICartsResponse): Observable<ICartsResponse> {
      return this.http.put<ICartsResponse>(`${this.url}/${id}`, payload);
    }

    delete(id: number): Observable<ICart> {
      return this.http.delete<ICart>(`${this.url}/${id}`);
    }


}
