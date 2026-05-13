import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PrimeNG } from 'primeng/config';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, TranslateModule],
    template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
    private readonly supportLanguages = ['en', 'ar'];

    constructor(
        private readonly primeng: PrimeNG,
        private readonly translate: TranslateService,
        @Inject(DOCUMENT) private readonly document: Document,
    ) {
        this.translate.addLangs(this.supportLanguages);
        this.translate.setDefaultLang('ar');
    }

    ngOnInit(): void {
        this.primeng.ripple.set(true);
        const lang = localStorage.getItem('lang') || 'ar';
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        this.translate.use(lang);
        this.translate.get('primeng').subscribe((res) => {
            this.primeng.setTranslation(res);
        });
        const html = this.document.documentElement;
        const body = this.document.body;
        html.setAttribute('dir', dir);
        html.setAttribute('lang', lang);
        html.classList.remove('rtl', 'ltr');
        html.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
        if (body) {
            body.setAttribute('dir', dir);
            body.setAttribute('lang', lang);
        }
    }
}
