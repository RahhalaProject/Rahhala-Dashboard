import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = 'An error occurred';

            if (error.error instanceof ErrorEvent) {
                errorMessage = `Error: ${error.error.message}`;
            } else {
                switch (error.status) {
                    case 400:
                        errorMessage = error.error?.message ?? 'Bad Request';
                        break;
                    case 401:
                        errorMessage = 'Unauthorized. Please login again.';
                        break;
                    case 403:
                        errorMessage = 'Access Denied';
                        void router.navigate(['/auth/access']);
                        break;
                    case 404:
                        errorMessage = 'Resource not found';
                        break;
                    case 500:
                        errorMessage = 'Internal Server Error';
                        break;
                    default:
                        errorMessage = error.error?.message ?? `Error Code: ${error.status}`;
                }
            }

            console.error('HTTP Error:', errorMessage);
            return throwError(() => ({
                status: error.status,
                message: errorMessage,
            }));
        }),
    );
};
