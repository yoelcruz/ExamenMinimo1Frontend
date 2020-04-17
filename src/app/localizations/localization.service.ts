import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Localization } from './localization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(
    private http: HttpClient
  ) { }

  getLocalizations(): Observable<Localization[]>{
    return this.http.get<Localization[]>('http://localhost:3800/localizations');
  }
}
