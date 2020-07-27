//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Scroll 
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { CoreRoutingModule } from './main-routing.module';
//Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

//Components
import { MaterialModule } from '../material.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideBarComponent } from '../material/left-side-bar/left-side-bar.component';
import { CardComponent } from '../material/card/card.component';
import { ToolbarComponent } from '../material/toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementComponent } from './element/element.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { WorkComponent } from './work/work.component';

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
    PerfectScrollbarModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class CoreModule { }
