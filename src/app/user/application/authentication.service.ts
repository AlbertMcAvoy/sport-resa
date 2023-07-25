import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../domain/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authUrl = 'api/users';
  user?: User = undefined;
  redirectUrl: string;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<User>(`${this.authUrl}/login`, {mail: email, password}, httpOptions);
  }

  logout() {
    this.user = undefined;
  }
}
