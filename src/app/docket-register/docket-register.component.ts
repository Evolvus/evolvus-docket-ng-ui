import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-docket-register',
  templateUrl: './docket-register.component.html',
  styleUrls: ['./docket-register.component.css']
})
export class DocketRegisterComponent implements OnInit {

  ngOnInit() {
  }


  constructor(private router: Router) { }


  eyeOpen = true;

  @Input() regFormName: string = 'DOCKET - AUDIT';

  emptyCredentialsMessage: string = '*All the fields are mandatory!';

  username: string;

  useremailID: string;

  userpassword: string;

  userconfirmpassword: string;


  @Output() userRegisterCredentials = new EventEmitter<{ username: string, useremailID: string, userpassword: string, userconfirmpassword: string }>();



  changeInputType() {
    this.eyeOpen = !this.eyeOpen;
    if (!this.eyeOpen) {
      (<HTMLInputElement>document.getElementById('user-password')).type = "text";
      (<HTMLInputElement>document.getElementById('user-password-confirm')).type = "text";
    }
    else {
      (<HTMLInputElement>document.getElementById('user-password')).type = "password";
      (<HTMLInputElement>document.getElementById('user-password-confirm')).type = "password";
    }
  }

  onFormSubmit(form: NgForm) {
    this.username = form.value.username;
    this.userpassword = form.value.userpassword;
    this.userRegisterCredentials.emit({
      username: this.username,
      useremailID: this.useremailID,
      userpassword: this.userpassword,
      userconfirmpassword: this.userconfirmpassword

    });
    this.router.navigate(['loginPage']);

  }

}
