import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation  } from "../../../animations/slide-in-out.animation";;

@Component({
  selector: 'app-field-add-edit',
  templateUrl: './field-add-edit.component.html',
  styleUrls: ['./field-add-edit.component.scss'],
  animations : [slideInOutAnimation],
  host : { '[@slideInOutAnimation]': '' }
})
export class FieldAddEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
