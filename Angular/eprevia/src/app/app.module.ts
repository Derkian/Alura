import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule  } from "./app-routing.module";

import { CoreModule } from './components/main/main.module';

import { SidenavService } from './services/sidenav.service';

@NgModule({
  declarations: [
    AppComponent,            
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [ SidenavService ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
