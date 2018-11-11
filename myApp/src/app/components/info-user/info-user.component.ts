import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent {
  profileForm = this.fb.group({
    name: [''],
    age: [''],
    birthday: [''],
    dateOfLogin: [''],
    dateOfNotification: ['']
  });

  showInfo: boolean = false;

  onSubmit() {
    this.showInfo = true;
  }

  constructor(private fb: FormBuilder) {
  }

}
