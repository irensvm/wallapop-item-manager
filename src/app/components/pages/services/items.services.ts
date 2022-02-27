import { Injectable } from '@angular/core';
import { Item } from './item.services';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiURL}`);
  }
}
