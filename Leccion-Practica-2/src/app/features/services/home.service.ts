import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/enviroment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProductResponse } from "../interfaces/public/Product";

@Injectable({providedIn: 'root'
})
export class HomeService {
  private url = environment.apiUrl;
  private http = inject(HttpClient);

  getProducts(): Observable<IProductResponse> {
    return this.http.get<IProductResponse>(`${this.url}/products`);
  }

}
