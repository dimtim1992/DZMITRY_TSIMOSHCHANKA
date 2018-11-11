import * as moment from 'moment';
import {AbstractControl} from "@angular/forms";

export function birthdayValidator(control: AbstractControl): { [key: string]: any } | null {
  return (moment(control.value, 'YYYY/MM/DD', true).isValid()) ? null : {'Format': true};
}



