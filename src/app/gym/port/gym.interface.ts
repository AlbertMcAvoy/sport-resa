import {Observable} from "rxjs";
import { Gym } from "../domain/Gym";

export interface IGymService {
  getGyms(): Observable<Gym[]>;
  getGym(id: number): Observable<Gym> | undefined;
  getGymByName(name: string): Observable<Gym> | undefined;
  createGym(id: number, gymData: Gym): Observable<Gym>;
  updateGym(id: number, gymData: Partial<Gym>): Observable<Gym>;
  deleteGym(id: number): Observable<Gym>;
}
