import { Component, ElementRef, ViewChild, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AvatarModule } from 'primeng/avatar';
import { LayoutService } from '@/layout/service/layout.service';
import { AppBreadcrumb } from './app.breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AuthService } from '@/core/services/auth.service';
import { APP_CONFIG } from '@/core/config/app.config';
import { resolveProfilePictureUrl } from '@/core/utils/profile-picture-url';
import { LanguageService } from '@/core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: '[app-topbar]',
    standalone: true,
    imports: [
        RouterModule,
        CommonModule,
        StyleClassModule,
        AppBreadcrumb,
        InputTextModule,
        ButtonModule,
        IconFieldModule,
        InputIconModule,
        AvatarModule,
        TranslateModule,
    ],
    template: `<div class="layout-topbar">
        <div class="topbar-start">
            <button #menubutton type="button" class="topbar-menubutton p-link p-trigger hover:cursor-pointer" (click)="onMenuButtonClick()">
                <i class="pi pi-bars"></i>
            </button>
            <nav app-breadcrumb class="topbar-breadcrumb"></nav>
        </div>

        <div class="topbar-end">
            <ul class="topbar-menu">
                <li class="topbar-search">
                    <p-iconfield>
                        <p-inputicon class="pi pi-search" />
                        <input type="text" pInputText [placeholder]="'portal.layout.searchPlaceholder' | translate" class="w-48 sm:w-full" />
                    </p-iconfield>
                </li>
                <li class="ml-3 flex items-center gap-2">
                    <p-button
                        styleClass="header-lang-toggle"
                        icon="pi pi-globe"
                        [label]="language.currentLangCode()"
                        size="small"
                        [outlined]="true"
                        [attr.aria-label]="'portal.layout.languageAria' | translate"
                        (onClick)="language.toggle()"
                    ></p-button>
                    <p-button icon="pi pi-palette" rounded (onClick)="onConfigButtonClick()"></p-button>
                </li>
                <li class="topbar-profile">
                    <button type="button" class="p-link hover:cursor-pointer" (click)="onProfileButtonClick()" [attr.aria-label]="'portal.layout.openProfileMenu' | translate">
                        <p-avatar
                            [image]="profileAvatarSrc()"
                            [label]="avatarLabel()"
                            shape="circle"
                        />
                    </button>
                </li>
            </ul>
        </div>
    </div>`,
})
export class AppTopbar {
    @ViewChild('menubutton') menuButton!: ElementRef;

    readonly layoutService = inject(LayoutService);
    readonly language = inject(LanguageService);
    private readonly authService = inject(AuthService);
    private readonly appConfig = inject(APP_CONFIG);

    readonly user = toSignal(this.authService.currentUser$, {
        initialValue: this.authService.currentUserValue,
    });

    readonly avatarLabel = computed(() => {
        const u = this.user();
        if (u?.profilePictureUrl?.trim()) {
            return undefined;
        }
        return this.userInitials();
    });

    readonly profileAvatarSrc = computed(() =>
        resolveProfilePictureUrl(this.user()?.profilePictureUrl, this.appConfig.apiUrl),
    );

    readonly userInitials = computed(() => {
        const u = this.user();
        if (!u) return '';
        const first = u.firstName?.charAt(0) ?? '';
        const last = u.lastName?.charAt(0) ?? '';
        const pair = `${first}${last}`.trim().toUpperCase();
        return pair || (u.email?.charAt(0).toUpperCase() ?? '');
    });

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onProfileButtonClick() {
        this.layoutService.showProfileSidebar();
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }
}
