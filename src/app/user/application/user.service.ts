import { Injectable } from '@angular/core';
import {IUserService} from "../port/user.interface";
import {Observable} from "rxjs";
import {User} from "../domain/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  userUrl = 'api/users';

  constructor(
    private http: HttpClient
  ) {}

  createUser(id: number, userData: User): Observable<User> {
    return this.http.post<User>(this.userUrl, userData, this.getHeaders());
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.userUrl}/${id}`);
  }

  getUser(id: number): Observable<User> | undefined {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  getUserByName(name: string): Observable<User> | undefined {
    return this.http.get<User>(`${this.userUrl}/?name=${name}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}`);
  }

  updateUser(id: number, userData: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.userUrl}/${id}`, userData, this.getHeaders());
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
