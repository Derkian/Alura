import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from './components/components.module';

import { SidenavService } from './services/sidenav.service';

@NgModule({
  declarations: [
    AppComponent,            
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,        
    ComponentsModule    
  ],
  providers: [ SidenavService ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
