import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  typesOfShoes: any[] = [ 
                          { icon : 'radio_button_checked',  type : 'Radio' } ,
                          { icon : 'toggle_on', type : 'Toggle' },
                          { icon : 'text_format', type : 'TextArea' },
                          { icon : 'arrow_drop_down_circle', type : 'DropDown' },
                          { icon : 'calendar_today', type : 'Date' },
                          { icon : 'call', type : 'Phone' },
                        ];

  constructor() { }

  ngOnInit(): void {
  }

}
