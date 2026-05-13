import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Sends current UI language on API requests (same keys as Rahhala-Site).
 * Reads `localStorage.lang` (e.g. `ar` | `en`); defaults to `ar`.
 */
export const langInterceptor: HttpInterceptorFn = (req, next) => {
    let lang = 'ar';
    try {
        lang = localStorage.getItem('lang')?.trim() || 'ar';
    } catch {
        /* ignore */
    }

    const cloned = req.clone({
        setHeaders: {
            'Content-Language': lang,
            'Accept-Language': lang,
        },
    });

    return next(cloned);
};
