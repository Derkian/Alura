import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule  } from "./app-routing.module";

import { MainModule } from './components/main/main.module';
import { AuthModule } from "./components/auth/auth.module";

import { SidenavService } from './services/sidenav.service';

@NgModule({
  declarations: [
    AppComponent,            
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [ SidenavService ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
