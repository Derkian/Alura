import {Component, Input} from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav'

import { SidenavService } from '../../../services/sidenav.service';
import { onMainContentChange } from '../../../animations/amimation';

import { ElementsServicesService  } from "../../../services/elements-services.service";
import { ElementBase } from '../../../class/element-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [ onMainContentChange ]
})
export class MainComponent {
  
  @Input() leftSidenav: MatSidenav;  
  public onSideNavChange: boolean;
  elements: ElementBase<any>[];

  constructor(private _sidenavService: SidenavService,
              private _service : ElementsServicesService) {    

    this._sidenavService.sideNavState$.subscribe( res => {      
      this.onSideNavChange = res;
    })

    this._service
        .getElements()
        .subscribe(ele => this.elements = ele);
  }
}
