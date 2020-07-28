import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    user: ['', Validators.required],
    pwd: ['', Validators.required],        
  });

  constructor(private loginService : LoginService,
              private router : Router,
              private fb: FormBuilder){ }

  ngOnInit(): void {
  }

  login(){
    
    this.loginService
      .login()
      .subscribe(() => {

      if (this.loginService.isLoggedIn) {

        this.router.navigate(['/main']);   
      } 
    });          

  }
}
