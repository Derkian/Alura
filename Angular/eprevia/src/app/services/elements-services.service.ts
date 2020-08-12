import { Injectable } from '@angular/core';
import { Observable, config } from 'rxjs'
import { map } from 'rxjs/operators';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../config.service';

import { BaseElement } from '../element-types/base-element';
import { DropdownElement } from '../element-types/dropdown-element';
import { TextboxElement } from '../element-types/textbox-element';
import { TextAreaElement } from '../element-types/textarea-element';
import { RadioElement } from '../element-types/radio-element';
import { CheckboxElement } from '../element-types/checkbox-element';


export interface itens {
  key : string,
  label : string
  controlType : string
  type : string,
  order : number,
  required : boolean,
  value : any,
  options : option[]  
}

export interface option {
  key : string,
  value : string
}


@Injectable({
  providedIn: 'root'
})
export class ElementsServicesService implements Resolve<BaseElement<string>[]> {

  public formElements : { 
    id : number,     
    options : {      
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      type?: string,
      mask? : string
    },
    element : BaseElement<string> 
  }[] = [];

  constructor(private http : HttpClient,
              private router : Router,
              private configuration : ConfigService) { }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) 
        : Observable<BaseElement<string>[]> {
    return this.getElements();
  }


  generateElement(controlType: string, options : any) : BaseElement<string> {

    switch (controlType) {
      case 'radio':

        return new RadioElement(options);

        break;
      case 'checkbox':        
        return new CheckboxElement(options);

        break;
      case 'textarea':
        return new TextAreaElement(options);

        break;
      case 'dropdown':
        return new DropdownElement(options);        
        break;      
    }

  }

  createElement(controlType : string){

    let item;

    debugger;

    switch (controlType) {
      case 'radio':

        item = { 
          id : (this.formElements.length + 1), 
          options : { 
            label : 'Radio' ,  
            options : [  
              { key : 'Sim', value : 'Sim' },
              { Key : 'Não', value : 'Não' } 
            ] 
          }          
        };

        break;
      case 'checkbox':

        item = { 
          id : (this.formElements.length + 1), 
          options : { 
            label : 'Toggle'
          },
        };

        break;
      case 'textarea':

        item = { 
          id : (this.formElements.length + 1), 
          options : { 
            label : 'TextArea'
          },
        };

        break;
      case 'dropdown':

        item = { 
          id : (this.formElements.length + 1), 
          options : {
            label : 'DropDown',
            options : [  
              { key : '1', value : 'Opção 1' },
              { key : '2', value : 'Opção 2' } ] 
          },
        };
        break;      
    }    

    item.element = this.generateElement(controlType, item.options);

    this.formElements.push(item);
  }

  finFormElement(id : number) : any{
    return this.formElements.find(item => item.id == id);
  }

  updateFormElement(id : number, options : any) : void{

    debugger;

    let item = this.formElements.find(index => index.id == id);

    item.options = options;
    
    item.element = this.generateElement(item.element.controlType, options);
  }

  getElements(){

    return this.http
            .get<itens[]>(`${this.configuration.app.baseUrl}/${this.configuration.app.element.list}`)
            .pipe(
                map(item => 
                    {
                        let elements : BaseElement<string>[] = [];
                        
                        item.forEach(element => {
                          switch (element.controlType) {
                            case 'dropdown':
                              elements.push(new DropdownElement(element));   
                              break;
                            case 'textbox':
                              elements.push(new TextboxElement(element));   
                              break;
                            case 'checkbox':
                              elements.push(new CheckboxElement(element));   
                              break;
                            case 'textarea':
                              elements.push(new TextAreaElement(element));   
                              break;
                            case 'radio':
                              elements.push(new RadioElement(element));   
                              break;
                        }  
                      });

                      return elements.sort((a, b) => a.order - b.order);
                    }
                )
          );
  }
}


// [
//   {
//     "id": "1",
//     "controlType": "textbox",
//     "type": "date",
//     "key": "dataAbertura",
//     "label": "Data Abertura",
// 	"value" : "2020-07-20",
//     "order": 1,
//     "value": ""
//   },
//   {
//     "id": "1",
//     "controlType": "dropdown",
//     "key": "seguradora",
//     "label": "Seguradora",
//     "order": 2,
//     "required": true,
// 	"value" : "3",
//     "options": [
//       {
//         "key": "1",
//         "value": "Liberty"
//       },
//       {
//         "key": "2",
//         "value": "Tokio"
//       },
//       {
//         "key": "3",
//         "value": "HDI"
//       },
//       {
//         "key": "4",
//         "value": "Sompo"
//       }
//     ]
//   },
//   {
//     "id": "3",
//     "controlType": "dropdown",
//     "key": "Departamento",
//     "label": "Departamento",
//     "order": 3,
//     "required": false,
//     "options": [
//       {
//         "key": "1",
//         "value": "Dep 1"
//       },
//       {
//         "key": "2",
//         "value": "Dep 2"
//       },
//       {
//         "key": "3",
//         "value": "Dep 3"
//       },
//       {
//         "key": "4",
//         "value": "Dep 4"
//       }
//     ]
//   },
//   {
//     "id": "4",
//     "controlType": "dropdown",
//     "key": "oficina",
//     "label": "Oficina",
//     "order": 4,
//     "required": true,
//     "options": [
//       {
//         "key": "123456",
//         "value": "Martelinho de Ouro"
//       },
//       {
//         "key": "78901",
//         "value": "Frison"
//       }
//     ]
//   },
//   {
//     "id": "5",
//     "controlType": "dropdown",
//     "key": "maoObra",
//     "label": "Padrão Mão de Obra",
//     "order": 5,
//     "required": true,
//     "options": [
//       {
//         "key": "1000",
//         "value": "Padrao 1000"
//       },
//       {
//         "key": "2000",
//         "value": "Padrao 2000"
//       }
//     ]
//   },
//   {
//     "id": "6",
//     "controlType": "textbox",
//     "type": "date",
//     "key": "dataSinistro",
//     "label": "Data do Sinistro",
//     "order": 6,
//     "required": true
//   },
//   {
//     "id": "7",
//     "controlType": "textbox",
//     "type": "text",
//     "key": "sinistro",
//     "label": "Sinistro",
//     "order": 7,
//     "required": true
//   },
//   {
//     "id": "7",
//     "controlType": "textbox",
//     "type": "text",
//     "key": "franquia",
// 	"mask" : "separator.2",
//     "label": "Franquia",
//     "order": 7,
// 	"value" : "1220.35",
//     "required": false
//   },
//   {
//     "id": "8",
//     "controlType": "textbox",
//     "type": "text",
//     "key": "telefone",
//     "label": "Telefone",
// 	"mask" : "(00) 0 0000-0000",
// 	"value" : "11969508287",
//     "order": 8,
//     "required": false
//   },
//   {
//     "id": "9",
//     "controlType": "textbox",
//     "type": "text",
//     "key": "hora",
//     "label": "Hora",
// 	"mask" : "Hh:m0",
// 	"value" : "0923",
//     "order": 9,
//     "required": false
//   },
//   {
//     "id": "10",
//     "controlType": "checkbox",
//     "key": "enableSMS",
//     "label": "SMS",
//     "order": 10,
//     "value" : true
//   },  
//   {
//     "id": "11",
//     "controlType": "radio",
//     "key": "tipoCliente",
//     "label": "Tipo Cliente",
//     "order": 11,
//     "required": false,
// 	"options" : [
// 		{"key": "Segurado", "value": "Segurado"},
//         {"key": "Terceiro", "value": "Terceiro"}
// 	]
//   },
//   {
//     "id": "12",
//     "controlType": "textarea",
//     "key": "observacao",
//     "label": "Observação",
//     "order": 12
//   }
// ]