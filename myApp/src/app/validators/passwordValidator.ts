import {AbstractControl} from '@angular/forms';

export function passwordValidator(control: AbstractControl): { [key: string]: any } | null {
  if(!control.value) {
    return {'Value': true}
  }
  if(control.value && isNaN(control.value)) {
    return {'Number': true}
  }
  const arr = control.value.trim().split('');
  if(control.value && arr.length < 4) {
    return {'Quantity': true};
  }
  return null;
}
