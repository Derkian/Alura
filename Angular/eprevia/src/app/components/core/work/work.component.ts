import { Component, OnInit } from '@angular/core';

import { ElementsServicesService  } from "../../../services/elements-services.service";
import { BaseElement } from '../../../element-types/base-element';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  
  isLinear = true;  
  elements: BaseElement<any>[];

  constructor(private _service : ElementsServicesService) { }

  ngOnInit(): void {
    
    this._service
    .getElements()
    .subscribe(ele => this.elements = ele);    
  }
}
