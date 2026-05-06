import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface AppConfig {
    production: boolean;
    apiUrl: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const appConfigValue: AppConfig = {
    production: environment.production,
    apiUrl: environment.apiUrl,
};
