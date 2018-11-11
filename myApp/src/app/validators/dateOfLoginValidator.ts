import * as moment from 'moment';
import {AbstractControl} from "@angular/forms";

export function dateOfLoginValidator(control: AbstractControl): { [key: string]: any } | null {
  return (moment(control.value, 'DD MM YYYY', true).isValid()) ? null : {'Format': true};
}
