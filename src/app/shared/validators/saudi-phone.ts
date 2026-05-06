import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function saudiPhoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const v = control.value;
        if (v == null || String(v).trim() === '') {
            return null;
        }
        const d = String(v).replace(/\D/g, '');
        if (/^9665[0-9]{8}$/.test(d) || /^05[0-9]{8}$/.test(d) || /^5[0-9]{8}$/.test(d)) {
            return null;
        }
        return { saudiPhone: true };
    };
}
