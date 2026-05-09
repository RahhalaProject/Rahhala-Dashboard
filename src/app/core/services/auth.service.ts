import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../config/app.config';
import { TokenService } from './token.service';
import { LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';
import { RefreshTokenRequest } from '../models/refresh-token-request.model';

/** Matches `POST /v1/AuthenticationManagement/login`. */
export interface LoginCredentials {
    email: string;
    password: string;
}

// /** Matches Rahhala-Site sign-in payload for `SendLoginOtp`. */
// export interface SendLoginOtpPayload {
//     phoneNumber: string;
//     password: string;
// }

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly router = inject(Router);
    private readonly tokenService = inject(TokenService);
    private readonly config = inject(APP_CONFIG) as AppConfig;
    private readonly apiUrl = this.config.apiUrl;

    private readonly currentUserSubject = new BehaviorSubject<User | null>(this.tokenService.getUser());
    readonly currentUser$ = this.currentUserSubject.asObservable();

    readonly isAuthenticated = signal<boolean>(!!this.tokenService.getAccessToken());

    get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    login(credentials: LoginCredentials): Observable<LoginResponse> {
        return this.http
            .post<LoginResponse>(`${this.apiUrl}/v1/AuthenticationManagement/login`, credentials)
            .pipe(
                tap((response) => this.handleAuthResponse(response)),
                catchError((error) => {
                    console.error('Login error:', error);
                    return throwError(() => error);
                }),
            );
    }

    // OTP flow disabled — use `login()` only. Re-enable route `auth/login-otp` if needed.
    // SendLoginOtp(payload: SendLoginOtpPayload): Observable<LoginResponse> {
    //     return this.http
    //         .post<LoginResponse>(`${this.apiUrl}/v1/Otp/send-login-otp`, {
    //             ...payload,
    //             userType: 1,
    //         })
    //         .pipe(
    //             catchError((error) => {
    //                 console.error('Send login OTP error:', error);
    //                 return throwError(() => error);
    //             }),
    //         );
    // }

    // VerifyLoginOtp(request: VerifyOtpRequest): Observable<LoginResponse> {
    //     return this.withFcmToken(request).pipe(
    //         switchMap((body) =>
    //             this.http.post<LoginResponse>(`${this.apiUrl}/v1/Authentication/login`, {
    //                 ...body,
    //                 userType: 1,
    //             }),
    //         ),
    //         tap((response) => this.handleAuthResponse(response)),
    //         catchError((error) => {
    //             console.error('OTP verification error:', error);
    //             return throwError(() => error);
    //         }),
    //     );
    // }

    refreshToken(): Observable<LoginResponse> {
        const refreshToken = this.tokenService.getRefreshToken();
        if (!refreshToken) {
            this.logout();
            return throwError(() => new Error('No refresh token available'));
        }
        const request: RefreshTokenRequest = { refreshToken };
        return this.http.post<LoginResponse>(`${this.apiUrl}/refresh-token`, request).pipe(
            tap((response) => this.handleAuthResponse(response)),
            catchError((error) => {
                console.error('Token refresh error:', error);
                this.logout();
                return throwError(() => error);
            }),
        );
    }

    logout(): void {
        const refreshToken = this.tokenService.getRefreshToken();
        if (refreshToken) {
            this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
                next: () => this.clearAuthData(),
                error: () => this.clearAuthData(),
            });
        } else {
            this.clearAuthData();
        }
    }

    isLoggedIn(): boolean {
        const token = this.tokenService.getAccessToken();
        return !!token && !this.tokenService.isTokenExpired(token);
    }

    hasAnyRole(roles: string[]): boolean {
        return this.tokenService.hasAnyRole(roles);
    }

    private handleAuthResponse(response: LoginResponse): void {
        this.tokenService.setTokens(response.token, response.refreshToken);
        const user: User = {
            userId: response.userId,
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName,
            roles: response.roles,
        };
        this.tokenService.setUser(user);
        this.currentUserSubject.next(user);
        this.isAuthenticated.set(true);
    }

    private clearAuthData(): void {
        this.tokenService.clearTokens();
        this.currentUserSubject.next(null);
        this.isAuthenticated.set(false);
        void this.router.navigate(['/auth/login']);
    }
}
