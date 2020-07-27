import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  selected : string
  Roles: any = ['Admin', 'Author', 'Reader'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
