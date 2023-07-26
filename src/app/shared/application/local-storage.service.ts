import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  tokenValue = new BehaviorSubject(this.token);

  set token(value: number | null) {
    this.tokenValue.next(value);
    localStorage.setItem('user_id', value?.toString() ?? "-1");
  }

  get token(): number | null {
    return parseInt(localStorage.getItem('user_id') ?? "-1");
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.token !== -1);
  }
}
