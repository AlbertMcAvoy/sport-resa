import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gym} from "../domain/gym";

@Injectable({
  providedIn: 'root'
})
export class GymService {

  gymUrl = 'api/gyms';

  constructor(private http: HttpClient) {}

  getGymList(): Observable<Gym[]> {
    return this.http.get<Gym[]>(this.gymUrl);
  }

  getGymById(gymId: number): Observable<Gym> {
    return this.http.get<Gym>(`this.gymUrl/${gymId}`);
  }
}
