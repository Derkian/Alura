import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { MaterialUiModule } from "../material-ui.module";
import { MaterialModule } from "../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,     
    ReactiveFormsModule,
    MaterialUiModule,
    MaterialModule,
    FlexLayoutModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
