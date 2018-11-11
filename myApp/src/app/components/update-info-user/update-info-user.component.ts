import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {nameValidator} from '../../validators/nameValidator';
import {birthdayValidator} from '../../validators/birthdayValidator';
import {dateOfLoginValidator} from '../../validators/dateOfLoginValidator';
import {dateOfNotificationValidator} from '../../validators/dateOfNotificationValidator';
import {ageValidator} from '../../validators/ageValidator';

@Component({
  selector: 'app-update-info-user',
  templateUrl: './update-info-user.component.html',
  styleUrls: ['./update-info-user.component.css']
})
export class UpdateInfoUserComponent {
  profileForm = this.fb.group({
    name: ['', '', [nameValidator]],
    age: ['', [ageValidator]],
    birthday: ['', [birthdayValidator]],
    dateOfLogin: ['', [dateOfLoginValidator]],
    dateOfNotification: ['', [dateOfNotificationValidator]]
  });

  showInfo: boolean = false;

  onSubmit() {
    this.showInfo = true;
  }

  constructor(private fb: FormBuilder) {
  }

}
