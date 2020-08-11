import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";
import { BaseElement } from 'src/app/element-types/base-element';
import { TextboxElement } from 'src/app/element-types/textbox-element';
import { FormGroup } from '@angular/forms';

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

                        
  item : BaseElement<string> = new TextboxElement();
  
  formElements : any[] = [];

  constructor(public router : Router) { }

  ngOnInit(): void {
  }


  addNewElement(type : string) : void {

    this.formElements.push( { type : type } )

  }

}
