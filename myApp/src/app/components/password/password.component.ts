import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {passwordValidator} from "../../validators/passwordValidator";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent{
  profileForm = this.fb.group({
    login: [''],
    password: ['', [passwordValidator]]
  });

  showInfo: boolean = false;

  onSubmit() {
    this.showInfo = true;
  }

  getPassword() {

  }

  constructor(private fb: FormBuilder) {
  }
}
