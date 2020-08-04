import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config{
  baseUrl : string,
  element : { 
    list : string
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  app : Config

  constructor(private http : HttpClient) { }

  loadConfig() {

    return this.http
               .get<Config>('./assets/config.json')
               .toPromise()
               .then(config => this.app = config);
  }
}
