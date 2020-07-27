import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){              
    this.toggled.emit();
  }

}
