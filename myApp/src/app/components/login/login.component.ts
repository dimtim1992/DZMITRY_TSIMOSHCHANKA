import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {loginValidator} from '../../validators/loginValidator';
import {passwordValidator} from "../../validators/passwordValidator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  profileForm = this.fb.group({
    login: ['', '', [loginValidator]],
    password: ['', [passwordValidator]]
  });

  showInfo: boolean = false;

  onSubmit() {
    this.showInfo = true;
  }

  constructor(private fb: FormBuilder) {
  }
}
