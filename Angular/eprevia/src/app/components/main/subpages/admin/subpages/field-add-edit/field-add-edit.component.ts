import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation  } from "../../../../../../animations/slide-in-out.animation";;
import { FormGroup, FormControl  } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ElementsServicesService } from 'src/app/services/elements-services.service';

@Component({
  selector: 'app-field-add-edit',
  templateUrl: './field-add-edit.component.html',
  styleUrls: ['./field-add-edit.component.scss'],
  animations : [slideInOutAnimation],
  host : { '[@slideInOutAnimation]': '' }
})
export class FieldAddEditComponent implements OnInit {

  fieldForm = new FormGroup({
    label : new FormControl(''),
    key : new FormControl(''),
    Required : new FormControl(''),
    order : new FormControl('')
  });

  constructor(public router : Router, private route: ActivatedRoute, private serv : ElementsServicesService) { }

  item : any;

  ngOnInit(): void {

    let id = +this.route.snapshot.paramMap.get('id');
    this.item = this.serv.finFormElement(id);   

  }

  changeOptions() : void {

    this.serv.updateFormElement(+this.route.snapshot.paramMap.get('id'), this.fieldForm.getRawValue())
  }

}
