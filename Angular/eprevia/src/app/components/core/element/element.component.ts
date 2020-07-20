import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { ElementBase } from '../../../class/element-base';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent {

  @Input() element : ElementBase<string>;
  @Input() form : FormGroup;

  constructor() {

   }

  get isValid() { 
    return this.form.controls[this.element.key].valid; 
  } 
  
}
