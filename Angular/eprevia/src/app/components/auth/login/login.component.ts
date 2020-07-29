import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { LoginService } from '../../../services/login.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading : boolean = false;

  loginForm = this.fb.group({
    user: ['', Validators.required ],
    pwd: ['', 
      [ 
        Validators.required , 
        Validators.minLength(8) 
      ]
    ],        
  });

  constructor(private loginService : LoginService,
              private notificationService : NotificationService,
              private router : Router,
              private fb: FormBuilder){ }

  ngOnInit(): void {
    this.loginService.logout();
  }

  login(){
    
    this.isLoading = true;

    this.loginService
      .login()
      .subscribe(() => {
                
      if (this.loginService.isLoggedIn) {

        this.notificationService.showSucess('Login realizado com sucesso!');

        this.router.navigate(['/main']);   
      } 
    });          

  }
}
