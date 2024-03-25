import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable ({
    providedIn: 'root'
})
export class DataService  {

    private baseURL = 'http://localhost:8080';
    constructor(private http: HttpClient){}

    postGirl(data: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}/auth/register`, data);}


    getData(): Observable<any> {
        return this.http.get<any>(`${this.baseURL}/girls`);
        }

    getHelpTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseURL}/helps/types`);
      }

    offerHelp(helpId: number)  {
        return this.http.post<any>(`${this.baseURL}/helps/got`, helpId);}

    }
    
