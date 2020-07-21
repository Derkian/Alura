import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { BaseElement } from '../element-types/base-element';

@Injectable({
  providedIn: 'root'
})
export class FormControlServiceService {

  constructor() { }

  toFormGroup(elements : BaseElement<string>[]){
    let group : any = {};

    elements.forEach(element => {
      group[element.key] = element.required 
                              ? new FormControl(element.value ||  '', Validators.required)
                              : new FormControl(element.value || '');
    });

    return new FormGroup(group);
  }
}
