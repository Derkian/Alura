import { Injectable } from '@angular/core';

import { ElementBase } from '../class/element-base';
import { DropdownElement } from '../class/dropdown-element';
import { TextboxElement } from '../class/textbox-element';
import { RadioElement } from '../class/radio-element';

import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ElementsServicesService {

  constructor() { }

  getElements(){

    let elements : ElementBase<string>[] = [
      
      new DropdownElement({
        key: 'brave',
        label: 'Bravery Rating',        
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxElement({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxElement({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new RadioElement({
        key: 'type',
        label: 'Job Type',
        order: 4,                
        options: [
          {key: 'hero', value: 'Hero'},
          {key: 'sidekick', value: 'Sidekick'}
        ]
      })
    ];    

    return of(elements.sort((a, b) => a.order - b.order));
    
  }
}
