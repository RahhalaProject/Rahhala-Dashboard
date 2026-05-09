import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

function shouldSkipBearer(url: string): boolean {
    const u = url.toLowerCase();
    return (
        u.includes('/auth/login') ||
        u.includes('/auth/register') ||
        u.includes('/refresh-token') ||
        u.includes('/authenticationmanagement/login') ||
        u.includes('send-login-otp') ||
        u.includes('send-register-otp') ||
        u.includes('forget-password') ||
        u.includes('resend-otp') ||
        u.includes('verify-forget-password-otp')
    );
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const tokenService = inject(TokenService);
    const authService = inject(AuthService);
    const accessToken = tokenService.getAccessToken();

    if (shouldSkipBearer(req.url)) {
        return next(req);
    }

    let outgoing = req;
    if (accessToken) {
        outgoing = req.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }

    return next(outgoing).pipe(
        catchError((error) => {
            if (error.status === 401 && tokenService.getRefreshToken()) {
                return authService.refreshToken().pipe(
                    switchMap(() => {
                        const newToken = tokenService.getAccessToken();
                        const clonedReq = req.clone({
                            setHeaders: {
                                Authorization: `Bearer ${newToken}`,
                            },
                        });
                        return next(clonedReq);
                    }),
                    catchError((refreshError) => {
                        authService.logout();
                        return throwError(() => refreshError);
                    }),
                );
            }
            return throwError(() => error);
        }),
    );
};
