import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from "../material-ui.module";

import { CardComponent } from "./card/card.component";
import { LeftSideBarComponent } from "./left-side-bar/left-side-bar.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";



@NgModule({
  declarations: [
    CardComponent,
    LeftSideBarComponent,
    ProgressBarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  exports : [
    CardComponent,
    LeftSideBarComponent,
    ProgressBarComponent,
    ToolbarComponent
  ]
})
export class MaterialModule { }
