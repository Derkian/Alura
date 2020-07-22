import { Component, Input,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElementsServicesService  } from "../../../services/elements-services.service";
import { BaseElement } from '../../../element-types/base-element';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  isLinear = true;  
  elements: BaseElement<any>[];

  constructor(private _formBuilder: FormBuilder,
              private _service : ElementsServicesService) { }

  ngOnInit(): void {
    
    this._service
    .getElements()
    .subscribe(ele => this.elements = ele);    
  }
}
