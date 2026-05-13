import { Component, computed, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { LayoutService } from '@/layout/service/layout.service';
import { LanguageService } from '@/core/services/language.service';
import { AuthService } from '@/core/services/auth.service';
import { User } from '@/core/models/user.model';
import { ProfileSettingsDialogComponent } from '@/core/components/profile-settings-dialog/profile-settings-dialog.component';
import { APP_CONFIG } from '@/core/config/app.config';
import { resolveProfilePictureUrl } from '@/core/utils/profile-picture-url';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: '[app-profilesidebar]',
    standalone: true,
    imports: [
        ButtonModule,
        DrawerModule,
        AsyncPipe,
        AvatarModule,
        ProfileSettingsDialogComponent,
        TranslateModule,
    ],
    template: `
        <app-profile-settings-dialog [(visible)]="profileSettingsVisible" />
        <p-drawer
            [visible]="visible()"
            (onHide)="onDrawerHide()"
            [position]="profileDrawerPosition()"
            [transitionOptions]="'.3s cubic-bezier(0, 0, 0.2, 1)'"
            styleClass="layout-profile-sidebar w-full sm:w-25rem"
        >
            <div class="flex flex-col mx-auto md:mx-0">
                @if (authService.currentUser$ | async; as user) {
                    <div class="flex items-start gap-4 mb-8 pb-6 border-b border-surface-200 dark:border-surface-700">
                        <p-avatar
                            [image]="avatarUrl(user)"
                            [label]="user.profilePictureUrl ? undefined : userInitials(user)"
                            shape="circle"
                            [style]="{ width: '3.5rem', height: '3.5rem' }"
                        />
                        <div class="flex flex-col gap-0.5 min-w-0">
                            <span class="font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ displayName(user) }}</span>
                            <span class="text-sm text-surface-600 dark:text-surface-400 break-all">{{ user.email }}</span>
                        </div>
                    </div>
                } @else {
                    <span class="mb-2 font-semibold">{{ 'portal.profile.welcome' | translate }}</span>
                    <span class="text-surface-500 dark:text-surface-400 font-medium mb-8">{{ 'portal.profile.guest' | translate }}</span>
                }

                <ul class="list-none m-0 p-0">
                    <li>
                        <button
                            type="button"
                            (click)="openProfileSettings()"
                            class="cursor-pointer flex w-full text-start mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 bg-transparent border-solid"
                        >
                            <span>
                                <i class="pi pi-cog text-xl text-primary"></i>
                            </span>
                            <div class="ms-4">
                                <span class="mb-2 font-semibold">{{ 'portal.profile.profileSettings' | translate }}</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <a
                            tabindex="0"
                            (click)="logout(); $event.preventDefault()"
                            (keydown.enter)="logout()"
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 text-start"
                        >
                            <span>
                                <i class="pi pi-power-off text-xl text-primary"></i>
                            </span>
                            <div class="ms-4">
                                <span class="mb-2 font-semibold">{{ 'portal.profile.signOut' | translate }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </p-drawer>
    `,
})
export class AppProfileSidebar {
    readonly layoutService = inject(LayoutService);
    readonly authService = inject(AuthService);
    private readonly appConfig = inject(APP_CONFIG);
    private readonly translate = inject(TranslateService);
    private readonly language = inject(LanguageService);

    /** English (LTR): opens from the right. Arabic (RTL): opens from the left. */
    readonly profileDrawerPosition = computed(() =>
        this.language.layoutDirection() === 'rtl' ? 'left' : 'right',
    );

    profileSettingsVisible = false;

    visible = computed(() => this.layoutService.layoutState().profileSidebarVisible);

    avatarUrl(user: User | null): string {
        return resolveProfilePictureUrl(user?.profilePictureUrl, this.appConfig.apiUrl);
    }

    userInitials(user: User | null): string {
        if (!user) return '';
        const first = user.firstName?.charAt(0) ?? '';
        const last = user.lastName?.charAt(0) ?? '';
        const pair = `${first}${last}`.trim().toUpperCase();
        return pair || (user.email?.charAt(0).toUpperCase() ?? '');
    }

    displayName(user: User | null): string {
        if (!user) {
            return this.translate.instant('portal.profile.guest');
        }
        const name = `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim();
        return name || user.email;
    }

    openProfileSettings(): void {
        this.onDrawerHide();
        this.profileSettingsVisible = true;
    }

    logout(): void {
        this.authService.logout();
        this.onDrawerHide();
    }

    onDrawerHide() {
        this.layoutService.layoutState.update((state) => ({
            ...state,
            profileSidebarVisible: false,
        }));
    }
}
