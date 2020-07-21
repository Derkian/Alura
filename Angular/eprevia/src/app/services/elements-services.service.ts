import { Injectable } from '@angular/core';

import { BaseElement } from '../element-types/base-element';
import { DropdownElement } from '../element-types/dropdown-element';
import { TextboxElement } from '../element-types/textbox-element';
import { RadioElement } from '../element-types/radio-element';
import { CheckboxElement } from '../element-types/checkbox-element';

import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ElementsServicesService {

  constructor() { }

  getElements(){

    let elements : BaseElement<string>[] = [
            
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
        key: 'jobType',
        label: 'Job Type',
        order: 4,                
        options: [
          {key: 'hero', value: 'Hero'},
          {key: 'sidekick', value: 'Sidekick'}
        ]
      }),

      new CheckboxElement({
        key: 'enableWifi',
        label: 'Wifi',
        order: 5,                          
      }),

      new CheckboxElement({
        key: 'enableSMS',
        label: 'SMS',
        order: 6,                          
      }),
    ];    

    return of(elements.sort((a, b) => a.order - b.order));
    
  }
}
