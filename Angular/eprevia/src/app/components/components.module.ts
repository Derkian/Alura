import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    SlideBarComponent
  ],
  imports: [
    CommonModule,     
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ToolbarComponent,
    SlideBarComponent
  ]
})

export class ComponentsModule { }
