import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/enviroment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/public/Product";

@Injectable({providedIn: 'root'
})
export class HomeService {
  private url = environment.apiUrl;
  private http = inject(HttpClient);

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products`);
  }

}
