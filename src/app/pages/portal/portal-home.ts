import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from '@/core/services/auth.service';

@Component({
    selector: 'app-portal-home',
    standalone: true,
    imports: [RouterModule, ButtonModule, CardModule],
    template: `
        <div class="card">
            <div class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-2">Home</div>
            <p class="text-surface-600 dark:text-surface-200 mb-6">
                Signed in as <strong>{{ displayName }}</strong
                >. Use the menu to open your orders or dashboards.
            </p>
            <div class="flex flex-wrap gap-2">
                <button pButton label="My orders" icon="pi pi-shopping-bag" [routerLink]="['/orders']"></button>
                <button
                    pButton
                    label="E-Commerce dashboard"
                    icon="pi pi-chart-bar"
                    [outlined]="true"
                    [routerLink]="['/dashboard-ecommerce']"
                ></button>
            </div>
        </div>
    `,
})
export class PortalHome {
    private readonly auth = inject(AuthService);

    get displayName(): string {
        const u = this.auth.currentUserValue;
        if (!u) {
            return 'User';
        }
        const name = `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim();
        return name || u.email;
    }
}
