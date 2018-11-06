import * as moment from 'moment';
import { ValidatorFn } from "@angular/forms";
import {AbstractControl} from "@angular/forms";

export function dateOfNotificationValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return (moment(control.value, 'DD-MM-YYYY', true).isValid()) ? null : {'Format': true};
  };
}
