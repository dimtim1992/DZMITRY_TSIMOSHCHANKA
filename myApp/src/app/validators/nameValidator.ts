import * as pascalCase from 'pascalcase';
import {ValidationErrors, ValidatorFn} from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs/index';

export function nameValidator(control: AbstractControl): Observable<ValidationErrors> {
  return new Observable<ValidationErrors>(observer => {
    const arr = control.value.split(' ');
    if (arr.length > 2) {
      observer.next({'Words': true});
      observer.complete();
    }
    arr.every((currentValue) => {
      if (currentValue !== pascalCase(currentValue)) {
        observer.next({'Format': true});
        observer.complete();
      }
    });
    observer.next(null);
    observer.complete();
  }).delay(3000);
}




