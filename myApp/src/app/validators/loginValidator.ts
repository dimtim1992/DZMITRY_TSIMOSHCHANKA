import * as pascalCase from 'pascalcase';
import {ValidationErrors} from '@angular/forms';
import {AbstractControl} from '@angular/forms';

export function loginValidator(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        const arr = control.value.trim().split(' ');
        if(arr.length > 1) {
          resolve({'Word': true});
        }
        if(!arr.every((element) => { return element.split('').every((element) => { return ((element.charCodeAt() >= 65 && element.charCodeAt() <= 90) || (element.charCodeAt() >= 97 && element.charCodeAt() <= 122)) }) })) {
          resolve({'Letter': true});
        }
        resolve(null);
      }, 3000);
    }
  ).then(result => result);
}
