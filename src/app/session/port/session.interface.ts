import {Observable} from "rxjs";
import {Session} from "../domain/Session";

export interface ISessionService {
  getSessions(): Observable<Session[]>;
  getSession(id: number): Observable<Session> | undefined;
  getSessionByName(name: string): Observable<Session> | undefined;
  createSession(id: number, sessionData: Session): Observable<Session>;
  updateSession(id: number, sessionData: Partial<Session>): Observable<Session>;
  deleteSession(id: number): Observable<Session>;
}
