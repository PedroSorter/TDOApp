import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.API;
  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> { 
      return this.http.get(`${this.baseUrl}${url}`);
  } 
}
