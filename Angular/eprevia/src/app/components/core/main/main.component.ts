import {Component, Input} from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav'

import { SidenavService } from '../../../services/sidenav.service';
import { onMainContentChange } from '../../../animations/amimation';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [ onMainContentChange ]
})
export class MainComponent {
  
  @Input() leftSidenav: MatSidenav;  
  public onSideNavChange: boolean;


  constructor(private _sidenavService: SidenavService) {    

    this._sidenavService.sideNavState$.subscribe( res => {      
      this.onSideNavChange = res;
    })

  }
}
