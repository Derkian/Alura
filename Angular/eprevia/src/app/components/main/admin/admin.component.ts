import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";
import { BaseElement } from 'src/app/element-types/base-element';
import { TextboxElement } from 'src/app/element-types/textbox-element';
import { FormGroup } from '@angular/forms';
import { FormControlServiceService } from 'src/app/services/form-control-service.service';
import { CheckboxElement } from 'src/app/element-types/checkbox-element';
import { RadioElement } from 'src/app/element-types/radio-element';
import { TextAreaElement } from 'src/app/element-types/textarea-element';
import { DropdownElement } from 'src/app/element-types/dropdown-element';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],  
})

export class AdminComponent implements OnInit {

  typeOfElements: any[] = [ 
                          { icon : 'radio_button_checked',  type : 'Radio' } ,
                          { icon : 'toggle_on', type : 'Toggle' },
                          { icon : 'text_format', type : 'TextArea' },
                          { icon : 'arrow_drop_down_circle', type : 'DropDown' },
                          { icon : 'calendar_today', type : 'Date' },
                          { icon : 'call', type : 'Phone' },
                        ];


  form: FormGroup;
  
  formElements : BaseElement<string>[] = [];

  constructor(public router : Router, private qcs: FormControlServiceService) { }

  ngOnInit(): void { }


  addNewElement(type : string) : void {

    switch (type) {
      case 'Radio':
        this.formElements.push(new RadioElement( { label : 'Radio' ,  options : [  { key : 'Sim', value : 'Sim' } ,  { Key : 'Não', value : 'Não' } ] }));        
        break;
      case 'Toggle':
        this.formElements.push(new CheckboxElement( { label : 'Toggle'} ));        
        break;
      case 'TextArea':
        this.formElements.push(new TextAreaElement( { label : 'TextArea'} ));        
        break;
      case 'DropDown':
        this.formElements.push(new DropdownElement({ label : 'DropDown', options : [  { key : '1', value : 'Opção 1' } , { key : '2', value : 'Opção 2' } ] } ));        
        break;
      case 'Date':
        this.formElements.push(new TextboxElement({ label : 'Date' , type : 'date' } ));        
        break;
      case 'Phone':
        this.formElements.push(new TextboxElement({ label : 'Phone' , mask : '(00) 0 0000-0000' } ));        
        break;
      default:

        break;
    }    

    this.form = this.qcs.toFormGroup(this.formElements);    

  }

}
