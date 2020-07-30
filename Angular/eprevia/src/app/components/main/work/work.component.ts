import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseElement } from '../../../element-types/base-element';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  
  isLinear = true;  
  elements: BaseElement<any>[];

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    
    this.route.data.subscribe((data : { elements : BaseElement<any>[] }) =>{
      this.elements = data.elements;
    } )
    
  }
}
