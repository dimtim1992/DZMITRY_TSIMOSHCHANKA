import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {nameValidator} from '../../validators/nameValidator';
import {birthdayValidator} from '../../validators/birthdayValidator';
import {dateOfLoginValidator} from '../../validators/dateOfLoginValidator';
import {dateOfNotificationValidator} from '../../validators/dateOfNotificationValidator';
import {ageValidator} from '../../validators/ageValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  profileForm = this.fb.group({
    name: ['', '', nameValidator],
    age: ['', ageValidator],
    birthday: ['', birthdayValidator],
    dateOfLogin: ['', dateOfLoginValidator],
    dateOfNotification: ['', dateOfNotificationValidator]
  });

  showInfo = false;

  onSubmit() {
    this.showInfo = true;
    console.warn(this.profileForm.get('name').value);
  }

  constructor(private fb: FormBuilder) {
  }
}
