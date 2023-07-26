import { Injectable } from '@angular/core';
import {IThemeService} from "../port/theme.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Theme} from "../domain/Theme";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements IThemeService {

  themeUrl = "api/themes";

  constructor(private http: HttpClient) {}

  createTheme(id: number, themeData: Theme): Observable<Theme> {
    return this.http.post<Theme>(this.themeUrl, themeData, this.getHeaders());
  }

  deleteTheme(id: number): Observable<Theme> {
    return this.http.delete<Theme>(`${this.themeUrl}/${id}`);
  }

  getTheme(id: number): Observable<Theme> | undefined {
    return this.http.get<Theme>(`${this.themeUrl}/${id}`);
  }

  getThemeByName(name: string): Observable<Theme> | undefined {
    return this.http.get<Theme>(`${this.themeUrl}/?name=${name}`);
  }

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.themeUrl}`);
  }

  updateTheme(id: number, themeData: Partial<Theme>): Observable<Theme> {
    return this.http.post<Theme>(`${this.themeUrl}/${id}`, themeData, this.getHeaders());
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
