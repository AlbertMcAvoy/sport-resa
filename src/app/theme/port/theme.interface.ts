import {Observable} from "rxjs";
import { Theme } from "../domain/Theme";

export interface IThemeService {
  getThemes(): Observable<Theme[]>;
  getTheme(id: number): Observable<Theme> | undefined;
  getThemeByName(name: string): Observable<Theme> | undefined;
  createTheme(id: number, themeData: Theme): Observable<Theme>;
  updateTheme(id: number, themeData: Partial<Theme>): Observable<Theme>;
  deleteTheme(id: number): Observable<Theme>;
}
