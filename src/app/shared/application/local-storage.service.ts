import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  tokenValue = new BehaviorSubject(this.token);

  set token(value: string | null) {
    this.tokenValue.next(value);
    localStorage.setItem('token', value ?? '');
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.token !== "undefined");
  }
}
