import { Component, Input,  OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementBase } from '../../../class/element-base';
import { FormControlServiceService  } from "../../../services/form-control-service.service";


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() elements: ElementBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlServiceService) { 
    
   }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.elements);    
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
