import { Component } from '@angular/core';

import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user : string = ''
  pwd : string  = ''

  constructor(private loginService : LoginService, private router : Router){ }

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
