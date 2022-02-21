import { Injectable } from "@angular/core";
//import { API_URL } from "./data.services";
import { Item } from "./item.services";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ItemsService{
    constructor(private http: HttpClient) {}

    getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(`https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json`)
    }
}






