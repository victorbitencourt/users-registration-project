import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const passwordConfirmationControl = control.get('confirmacaoSenha');

    if (!control.value.confirmacaoSenha) {
      return null;
    }
    if (control.value.senha != control.value.confirmacaoSenha) {
      passwordConfirmationControl?.setErrors({
        invalidPasswordConfirmation: true,
      });
      return { invalidPasswordConfirmation: true };
    }

    return null;
  }
}
