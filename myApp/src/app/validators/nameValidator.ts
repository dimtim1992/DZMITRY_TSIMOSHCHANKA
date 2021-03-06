import * as pascalCase from 'pascalcase';
import {ValidationErrors} from '@angular/forms';
import {AbstractControl} from '@angular/forms';

export function nameValidator(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        const arr = control.value.trim().split(' ');
        if(arr.length > 2) {
          resolve({'Words': true});
        }
        if(!arr.every((element) => { return element.split('').every((element) => { return ((element.charCodeAt() >= 65 && element.charCodeAt() <= 90) || (element.charCodeAt() >= 97 && element.charCodeAt() <= 122)) }) })) {
          resolve({'Letter': true});
        }
        if(!arr.every((element) => { return (element === pascalCase(element))})) {

          resolve({'Capital': true});
        }
        resolve(null);
      }, 3000);
    }
  ).then(result => result);
}




