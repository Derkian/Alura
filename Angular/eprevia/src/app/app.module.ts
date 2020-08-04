import { NgModule, APP_INITIALIZER } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule  } from "./app-routing.module";

import { MainModule } from './components/main/main.module';
import { AuthModule } from "./components/auth/auth.module";

import { SidenavService } from './services/sidenav.service';
import { ConfigService } from './config.service';

export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};

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
  providers: [ 
    SidenavService,
    {
      provide : APP_INITIALIZER,
      useFactory : configFactory,
      deps : [
        ConfigService, 
        HttpClient
      ],
      multi : true
    }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
