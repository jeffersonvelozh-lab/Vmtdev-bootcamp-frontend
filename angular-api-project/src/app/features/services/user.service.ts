import { inject, Injectable } from "@angular/core";
import { enviroment } from "../../../Environment/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly url = `${enviroment.apiUrl}/users`;
  private readonly http = inject(HttpClient);

}
