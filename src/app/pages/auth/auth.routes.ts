import { Routes } from '@angular/router';
import { Access } from './access';
import { Login } from './login';
// import { LoginOtp } from './login-otp';
import { Error } from './error';
import { Register } from './register';
import { ForgotPassword } from './forgotpassword';
import { NewPassword } from './newpassword';
import { Verification } from './verification';
import { LockScreen } from './lockscreen';
import { guestGuard } from '@/core/guards/guest.guard';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login, canActivate: [guestGuard] },
    // OTP step disabled — sign-in uses email/password only.
    // { path: 'login-otp', component: LoginOtp, canActivate: [guestGuard] },
    { path: 'register', component: Register },
    { path: 'forgotpassword', component: ForgotPassword },
    { path: 'newpassword', component: NewPassword },
    { path: 'verification', component: Verification },
    { path: 'lockscreen', component: LockScreen }
] as Routes;
