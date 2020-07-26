import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeroesModule }     from './heroes/heroes.module';
import { CrisisCenterModule } from "./crisis-center/crisis-center.module";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,  
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,    
    PageNotFoundComponent, ComposeMessageComponent,    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }