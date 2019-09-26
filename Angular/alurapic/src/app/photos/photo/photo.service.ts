import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Photo } from "./photo";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient){

        this.http = http;
     }

    listFromUser(username: string): Observable<Photo[]>{
        
        return this.http
                    .get<Photo[]>(`http://localhost:3000/${username}/photos`)            
    }

    listFromUserPaginetad(username: string, page : number): Observable<Photo[]>{
        
        let params = new HttpParams().append('page', page.toString());

        return this.http
                    .get<Photo[]>(`http://localhost:3000/${username}/photos`, { params })            
    }
}
