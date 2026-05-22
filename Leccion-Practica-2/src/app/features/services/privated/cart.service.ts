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

}
