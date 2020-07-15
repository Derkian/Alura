import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../../../services/sidenav.service';
import {onSideNavChange, animateText} from '../../../animations/amimation';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css'],
  animations : [onSideNavChange, animateText]
})

export class LeftSideBarComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Inbox', link:'some-link', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  onSinenavToggle() {

    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
