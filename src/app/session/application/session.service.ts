import { Injectable } from '@angular/core';
import {ISessionService} from "../port/session.interface";
import {Session} from "../domain/Session";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SessionService implements ISessionService {

  sessionUrl = 'api/sessions';

  constructor(private http: HttpClient) {}

  createSession(id: number, sessionData: Session): Observable<Session> {
    return this.http.post<Session>(this.sessionUrl, sessionData, this.getHeaders());
  }

  deleteSession(id: number): Observable<Session> {
    return this.http.delete<Session>(`${this.sessionUrl}/${id}`);
  }

  getSession(id: number): Observable<Session> | undefined {
    return this.http.get<Session>(`${this.sessionUrl}/${id}`);
  }

  getSessionByName(name: string): Observable<Session> | undefined {
    return this.http.get<Session>(`${this.sessionUrl}/?name=${name}`);
  }

  getSessionByGymId(gym_id: number) {
    return this.http.get<Session>(`${this.sessionUrl}/?id_gym=${gym_id}`);
  }

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.sessionUrl}`);
  }

  updateSession(id: number, sessionData: Partial<Session>): Observable<Session> {
    return this.http.post<Session>(this.sessionUrl, sessionData, this.getHeaders());
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
