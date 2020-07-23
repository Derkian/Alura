//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Scroll 
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

//Routing
import { AppRoutingModule } from '../app-routing.module';

//Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

//Components
import { MaterialModule } from './material.module';
import { MainComponent } from './core/main/main.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LeftSideBarComponent } from './material/left-side-bar/left-side-bar.component';
import { CardComponent } from './material/card/card.component';
import { ToolbarComponent } from './material/toolbar/toolbar.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ElementComponent } from './core/element/element.component';
import { DynamicFormComponent } from './core/dynamic-form/dynamic-form.component';
import { WorkComponent } from './core/work/work.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    LeftSideBarComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardComponent,
    ToolbarComponent,
    DashboardComponent,    
    DynamicFormComponent,
    ElementComponent,
    WorkComponent   
  ],
  imports: [
    CommonModule,     
    AppRoutingModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [    
    MainComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})

export class ComponentsModule { }
