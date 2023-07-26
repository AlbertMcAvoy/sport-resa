import {Observable} from "rxjs";
import {User} from "../domain/User";

export interface IUserService {
  getUsers(): Observable<User[]>;
  getUser(id: number): Observable<User> | undefined;
  getUserByName(name: string): Observable<User> | undefined;
  createUser(id: number, userData: User): Observable<User>;
  updateUser(id: number, userData: Partial<User>): Observable<User>;
  deleteUser(id: number): Observable<User>;
}
