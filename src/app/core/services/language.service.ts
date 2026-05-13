import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNG } from 'primeng/config';

/** Matches Rahhala-Site `lang` + `langInterceptor` (`ar` | `en`). */
@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    private readonly document = inject(DOCUMENT);
    private readonly router = inject(Router);
    private readonly translate = inject(TranslateService);
    private readonly primeng = inject(PrimeNG);

    private readonly lang = signal(this.readLangFromStorage());

    constructor() {
        this.applyDocumentDirection(this.lang());
        this.syncTranslateAndPrimeng(this.lang());
    }

    /** Short code for the toggle label (e.g. AR / EN). */
    readonly currentLangCode = computed(() => this.lang().toUpperCase());

    toggle(): void {
        const next = this.lang() === 'ar' ? 'en' : 'ar';
        this.apply(next);
    }

    apply(lang: string): void {
        const normalized = lang === 'ar' || lang === 'en' ? lang : 'ar';
        try {
            localStorage.setItem('lang', normalized);
        } catch {
            /* private mode */
        }
        this.lang.set(normalized);

        this.applyDocumentDirection(normalized);
        this.syncTranslateAndPrimeng(normalized);

        const currentUrl = this.router.url;
        void this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            void this.router.navigateByUrl(currentUrl);
        });
    }

    private readLangFromStorage(): string {
        try {
            const v = localStorage.getItem('lang')?.trim();
            return v === 'en' || v === 'ar' ? v : 'ar';
        } catch {
            return 'ar';
        }
    }

    private applyDocumentDirection(lang: string): void {
        const html = this.document.documentElement;
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        html.classList.remove('rtl', 'ltr');
        html.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
    }

    private syncTranslateAndPrimeng(lang: string): void {
        this.translate.use(lang);
        this.translate.get('primeng').subscribe((res) => {
            this.primeng.setTranslation(res);
        });
    }
}
