import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { ElementBase } from '../class/element-base';

@Injectable({
  providedIn: 'root'
})
export class FormControlServiceService {

  constructor() { }

  toFormGroup(elements : ElementBase<string>[]){
    let group : any = {};

    elements.forEach(element => {
      group[element.key] = element.required 
                              ? new FormControl(element.value ||  '', Validators.required)
                              : new FormControl(element.value || '');
    });

    return new FormGroup(group);
  }
}
