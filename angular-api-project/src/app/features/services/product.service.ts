import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { enviroment } from "../../../Environment/environment";


@Injectable({providedIn: 'root'})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly url = '${enviroment.apiUrl}/products';
}
