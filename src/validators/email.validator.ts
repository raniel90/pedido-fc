import { AbstractControl } from '@angular/forms';

export class EmailValidator {

  static validate(control: AbstractControl) {

    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(control.value)) {
      return { "INVALID_EMAIL": true };
    }

    return null;
  }

}
