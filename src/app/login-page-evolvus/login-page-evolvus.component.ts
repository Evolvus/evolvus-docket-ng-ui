import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page-evolvus',
  templateUrl: './login-page-evolvus.component.html',
  styleUrls: ['./login-page-evolvus.component.css']
})
export class LoginPageEvolvusComponent implements OnInit {


  ngOnInit() {


  }
  hideCloseBtn = true;


  constructor(private router: Router, private http: HttpClient) { }

  // @ViewChild('loginForm') loginForm: NgForm;

  eyeOpen = false;

  @Input() loginFormName: string = 'DOCKET - AUDIT';

  emptyCredentialsMessage: string = '* Username & Password credentials is mandatory!';

  username: string;

  userpassword: string;

  passwordType: string = "password";

  @Output() userCredentials = new EventEmitter<{ username: string, userpassword: string }>();



  changeInputType() {
    this.eyeOpen = !this.eyeOpen;
    if (!this.eyeOpen) {
this.passwordType = "password";
    }
    else {
this.passwordType = "text";
    }
  }

  onFormSubmit(form: NgForm) {
    // this.username = form.value.username;
    // this.userpassword = form.value.userpassword;
    // this.userCredentials.emit({
    //   username: this.username,
    //   userpassword: this.userpassword
    // });
    //
    // this.http.post('http://192.168.1.115:8080/login',
    //   {
    //     email: this.username,
    //     password: this.userpassword
    //   }
    // )
    //   .subscribe((response: Response) => {
    //     console.log(response);
    //   });
    this.router.navigate(['homePage']);
  }

  toRegisterUser() {
    this.router.navigate(['registerPage']);
  }



}
