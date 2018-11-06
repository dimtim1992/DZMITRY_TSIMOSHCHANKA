import {ValidatorFn} from '@angular/forms';
import {AbstractControl} from '@angular/forms';

const minAge = 18;
const maxAge = 65;

export function ageValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!isNaN(control.value) && Number.isInteger(control.value)) {
      return (control.value >= minAge && control.value <= maxAge) ? null : {'CorrectNumber': true};
    }
    return {'IntegerNumber': true};
  };
}
