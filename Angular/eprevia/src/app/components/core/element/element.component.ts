import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { BaseElement } from '../../../element-types/base-element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {

  @Input() element : BaseElement<string>;
  @Input() form : FormGroup;

  constructor() {

   }

  get isValid() { 
    return this.form.controls[this.element.key].valid; 
  } 
  
}
