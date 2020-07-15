import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSidenav } from '@angular/material/sidenav'
import { SidenavService } from '../../services/sidenav.service';
import { onMainContentChange } from '../../animations/amimation';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css'],
  animations: [ onMainContentChange ]
})
export class SlideBarComponent {
  @Input() leftSidenav: MatSidenav;
  options: FormGroup;
  name = 'Angular';
  public onSideNavChange: boolean;

  constructor(fb: FormBuilder,
              private _sidenavService: SidenavService) {    

    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });

    this._sidenavService.sideNavState$.subscribe( res => {      
      this.onSideNavChange = res;
    })
  }

}