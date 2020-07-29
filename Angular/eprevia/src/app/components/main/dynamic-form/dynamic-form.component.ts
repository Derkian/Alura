import { Component, Input,  OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseElement } from '../../../element-types/base-element';
import { FormControlServiceService  } from "../../../services/form-control-service.service";
import { NotificationService  } from "../../../services/notification.service";


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() elements: BaseElement<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlServiceService, 
              private notificationService : NotificationService) { 
    
   }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.elements);    
  }

  onSubmit() {
    this.notificationService.showError('Salvo com sucesso!');    
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
