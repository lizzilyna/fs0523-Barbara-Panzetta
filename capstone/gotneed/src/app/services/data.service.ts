import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable ({
    providedIn: 'root'
})
export class DataService  {

    private baseURL = 'http://localhost:8080/api';
    constructor(private http: HttpClient){}

    postGirl(data: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}/girls`, data);}


    getData() {
        return this.http.get<any>('http://localhost:8080/api/data')

        imports: [
        ]
    }
}