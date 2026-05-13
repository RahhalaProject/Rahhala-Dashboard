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
        this.translate.use(lang);
        this.translate.get('primeng').subscribe((res) => {
            this.primeng.setTranslation(res);
        });
        const html = this.document.documentElement;
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        html.classList.remove('rtl', 'ltr');
        html.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
    }
}
