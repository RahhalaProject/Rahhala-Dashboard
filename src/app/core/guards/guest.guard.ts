import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/** If already authenticated, skip auth pages and continue to the app. */
export const guestGuard: CanActivateFn = (route) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isLoggedIn()) {
        return true;
    }

    const returnUrl = route.queryParamMap.get('returnUrl') || '/home';
    void router.navigateByUrl(returnUrl);
    return false;
};
