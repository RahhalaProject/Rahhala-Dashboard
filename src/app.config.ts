import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
import { appRoutes } from './app.routes';
import { APP_CONFIG, appConfigValue } from './app/core/config/app.config';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';
import { errorInterceptor } from './app/core/interceptors/error.interceptor';
import { langInterceptor } from './app/core/interceptors/lang.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: APP_CONFIG, useValue: appConfigValue },
        MessageService,
        provideRouter(
            appRoutes,
            withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
            withEnabledBlockingInitialNavigation(),
        ),
        provideHttpClient(
            withFetch(),
            withInterceptors([langInterceptor, authInterceptor, errorInterceptor]),
        ),
        importProvidersFrom(HttpClientModule, TranslateModule.forRoot()),
        ...provideTranslateHttpLoader({ prefix: './assets/i18n/', suffix: '.json' }),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),
    ],
};
