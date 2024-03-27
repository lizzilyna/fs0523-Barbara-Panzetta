import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable ({
    providedIn: 'root'
})
export class DataService  {

    private baseURL = 'http://localhost:8080';
    constructor(private http: HttpClient){}

    postGirl(data: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}/auth/register`, data);}

    login(credentials: {username: string, password: string}): Observable<string> {
            return this.http.post(`${this.baseURL}/auth/login`, credentials, {responseType:'text'});
          }
        
    getData(): Observable<any> {
        return this.http.get<any>(`${this.baseURL}/girls`);
        }

        getHelpTypes(): Observable<string[]> {
            return this.http.get<string[]>(`${this.baseURL}/helps/types`).pipe(
              map(types => types.map(type => this.transformHelpTypeName(type)))
            );
          }

    offerHelp(helpId: number)  {
        return this.http.post<any>(`${this.baseURL}/helps/got`, helpId);}

        transformHelpTypeName(name: string): string {
            // Sostituisce gli underscore con spazi e rende maiuscola la prima lettera di ogni parola
            return name.toLowerCase().split('_').map(word => word.slice(0)).join(' ');

    }
}
