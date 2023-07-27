import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gym} from "../domain/Gym";
import {IGymService} from "../port/gym.interface";

@Injectable({
  providedIn: 'root'
})
export class GymService implements IGymService {

  gymUrl = 'api/gyms';

  constructor(private http: HttpClient) {}

  createGym(id: number, gymData: Gym): Observable<Gym> {
    return this.http.post<Gym>(this.gymUrl, gymData, this.getHeaders());
  }

  deleteGym(id: number): Observable<Gym> {
    return this.http.delete<Gym>(`${this.gymUrl}/${id}`);
  }

  getGym(id: number): Observable<Gym> | undefined {
    return this.http.get<Gym>(`${this.gymUrl}/${id}`);
  }

  getGymByName(name: string): Observable<Gym> | undefined {
    return this.http.get<Gym>(`${this.gymUrl}/?name=${name}`);
  }

  getGyms(): Observable<Gym[]> {
    return this.http.get<Gym[]>(this.gymUrl);
  }

  updateGym(id: number, gymData: Partial<Gym>): Observable<Gym> {
    return this.http.post<Gym>(`${this.gymUrl}/${id}`, gymData, this.getHeaders());
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
