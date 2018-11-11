import {AbstractControl} from '@angular/forms';

const minAge = 18;
const maxAge = 65;

export function ageValidator(control: AbstractControl): { [key: string]: any } | null {
    if(control.value && isNaN(control.value)) {
      return {'Number': true}
    }
    if(control.value && (control.value < minAge || control.value > maxAge)) {
      return {'CorrectNumber': true}
    }
    return null;
}
