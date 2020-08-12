import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";
import { FormGroup } from '@angular/forms';

import { BaseElement } from 'src/app/element-types/base-element';
import { TextboxElement } from 'src/app/element-types/textbox-element';
import { FormControlServiceService } from 'src/app/services/form-control-service.service';
import { CheckboxElement } from 'src/app/element-types/checkbox-element';
import { RadioElement } from 'src/app/element-types/radio-element';
import { TextAreaElement } from 'src/app/element-types/textarea-element';
import { DropdownElement } from 'src/app/element-types/dropdown-element';
import { ElementsServicesService } from 'src/app/services/elements-services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],  
})

export class AdminComponent implements OnInit {

  typeOfElements: any[] = [ 
                            { icon : 'radio_button_checked',  label : 'Radio', controlType : 'radio' } ,
                            { icon : 'toggle_on', label : 'Toggle', controlType : 'checkbox' },
                            { icon : 'text_format', label : 'TextArea', controlType : 'textarea' },
                            { icon : 'arrow_drop_down_circle', label : 'DropDown', controlType : 'dropdown' }                            
                          ];

  form: FormGroup;
  
  formElements : { id : number , element : BaseElement<string> }[] = [];

  constructor(public router : Router,
              private qcs: FormControlServiceService,
              private serv : ElementsServicesService) { }

  ngOnInit(): void { 
    

    let elements = this.formElements.map(a => a.element);
    this.form = this.qcs.toFormGroup(elements);
  }


  addNewElement(controlType : string) : void {

    debugger;

    this.serv.createElement(controlType);    

    this.formElements = this.serv.formElements;

    let itens = this.formElements.map(item => item.element);

    this.form = this.qcs.toFormGroup(itens);

  }

}
