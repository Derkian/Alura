import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BaseElement } from '../element-types/base-element';
import { DropdownElement } from '../element-types/dropdown-element';
import { TextboxElement } from '../element-types/textbox-element';
import { TextAreaElement } from '../element-types/textarea-element';
import { RadioElement } from '../element-types/radio-element';
import { CheckboxElement } from '../element-types/checkbox-element';


export interface itens {
  key : string,
  label : string
  type : string,
  order : number,
  required : boolean,
  value : any,
  options : option[]  
}

export interface option {
  key : string,
  value : string
}


@Injectable({
  providedIn: 'root'
})
export class ElementsServicesService implements Resolve<BaseElement<string>[]> {

  constructor(private http : HttpClient, private router : Router) { }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) 
        : Observable<BaseElement<string>[]> {
    return this.getElements();
  }

  getElements(){

    return this.http
            .get<itens[]>('https://5f21fb8d0e9f660016d87d83.mockapi.io/item')
            .pipe(
                map(item => 
                    {
                        let elements : BaseElement<string>[] = [];
                        
                        item.forEach(element => {
                          switch (element.type) {
                            case 'dropdown':
                              elements.push(new DropdownElement(element));   
                              break;
                            case 'textbox':
                              elements.push(new TextboxElement(element));   
                              break;
                            case 'checkbox':
                              elements.push(new CheckboxElement(element));   
                              break;
                            case 'textarea':
                              elements.push(new TextAreaElement(element));   
                              break;
                            case 'radio':
                              elements.push(new RadioElement(element));   
                              break;
                        }  
                      });

                      return elements.sort((a, b) => a.order - b.order);
                    }
                )
          );
  }
}
