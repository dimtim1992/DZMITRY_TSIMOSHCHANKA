import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms'
import { nameValidator } from './validators/nameValidator';
import { dateValidator } from './validators/dateValidator';
import { ageValidator } from './validators/ageValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  //   birthday: new FormControl(''),
  //   dateOfLogin: new FormControl(''),
  //   dateOfNotification: new FormControl('')
  // });
  profileForm = this.fb.group({
    name: ['', Validators.required, nameValidator],
    age: ['', ageValidator],
    birthday: ['', dateValidator],
    dateOfLogin: ['', dateValidator],
    dateOfNotification: ['', dateValidator]
  });

  

  constructor(private fb: FormBuilder)  {}

  showInfo: boolean = false;

  onSubmit() {
    //console.warn(this.profileForm.value);
    this.showInfo = true;
    console.warn(this.profileForm.get('name').value);
  }

}
