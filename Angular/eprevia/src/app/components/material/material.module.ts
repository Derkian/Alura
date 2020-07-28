import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialUiModule } from "../material-ui.module";

import { CardComponent } from "./card/card.component";
import { LeftSideBarComponent } from "./left-side-bar/left-side-bar.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SnackBarComponent } from './snack-bar/snack-bar.component';



@NgModule({
  declarations: [
    CardComponent,
    LeftSideBarComponent,
    ProgressBarComponent,
    ToolbarComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialUiModule
  ],
  exports : [
    CardComponent,
    LeftSideBarComponent,
    ProgressBarComponent,
    ToolbarComponent,
    SnackBarComponent
  ]
})
export class MaterialModule { }
