import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';

import { LeftSideBarComponent } from './material/left-side-bar/left-side-bar.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { FooterComponent } from './core/footer/footer.component';
import { CardComponent } from './material/card/card.component';
import { ToolbarComponent } from './material/toolbar/toolbar.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';


@NgModule({
  declarations: [
    LeftSideBarComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardComponent,
    ToolbarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,     
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [    
    MainComponent,
  ]
})

export class ComponentsModule { }
