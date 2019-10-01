import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector-service";

@Component({
    selector : 'ap-sigin',
    templateUrl : './signin.component.html'
})

export class SigInComponent implements OnInit {
    
    loginForm : FormGroup;
    @ViewChild('userNameInput') userNameInput : ElementRef<HTMLInputElement>
    
    constructor(private formBuilder : FormBuilder,
                private authService : AuthService,
                private route : Router,
                private platformaDetectorService : PlatformDetectorService){ }
    
    ngOnInit(): void {
        
        this.loginForm = this.formBuilder
                             .group({
                                userName : ['', Validators.required],
                                password : ['', Validators.required]            
                             });
    } 

    login(){

        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .autenticate(userName, password)
            .subscribe( 
                data => {                    
                    this.route.navigate(['user', userName]);
                },
                error => {
                    alert(error.error.message);                    
                    this.platformaDetectorService.isPlatformBrowser() && 
                        this.userNameInput.nativeElement.focus();
                    this.loginForm.reset();
                }
            );
    }
}