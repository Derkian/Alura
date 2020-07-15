import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { LeftSideBarComponent } from './material/left-side-bar/left-side-bar.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { FooterComponent } from './core/footer/footer.component';


@NgModule({
  declarations: [
    LeftSideBarComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,     
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [    
    MainComponent,
  ]
})

export class ComponentsModule { }
