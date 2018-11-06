import * as moment from 'moment';
import { ValidatorFn } from "@angular/forms";
import {AbstractControl} from "@angular/forms";

export function birthdayValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      return (moment(control.value, 'YYYY/MM/DD', true).isValid()) ? null : {'Format': true};
  };
}



