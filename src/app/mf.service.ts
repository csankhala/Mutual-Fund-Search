import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {debounceTime} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MfService {

  private baseUrl = 'https://api.mfapi.in/mf';

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?q=${searchTerm}`).pipe(debounceTime(500));
  }

  detail(schemeCode: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${schemeCode}`);
  }
}
