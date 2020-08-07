import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation  } from "../../../animations/slide-in-out.animation";;
import { FormGroup, FormControl  } from "@angular/forms";
import { Router } from "@angular/router";

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
    Required : new FormControl()
  });

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

}
