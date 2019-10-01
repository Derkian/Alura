import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL_API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  autenticate(userName: string, password : string){

    return this.http.post(`${URL_API}/user/login`, { userName, password })
  }
}
