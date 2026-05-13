import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ActivatedRouteSnapshot,
    NavigationEnd,
    Router,
    RouterModule,
} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BehaviorSubject, filter } from 'rxjs';

interface Breadcrumb {
    labelKey?: string;
    label?: string;
    url?: string;
}

@Component({
    selector: '[app-breadcrumb]',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule],
    template: `<nav class="layout-breadcrumb">
        <ol>
            <ng-template
                ngFor
                let-item
                let-last="last"
                [ngForOf]="breadcrumbs$ | async"
            >
                <li>{{ item.labelKey ? (item.labelKey | translate) : item.label }}</li>
                <li *ngIf="!last" class="layout-breadcrumb-chevron">/</li>
            </ng-template>
        </ol>
    </nav> `,
})
export class AppBreadcrumb {
    private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

    readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

    constructor(private router: Router) {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                const root = this.router.routerState.snapshot.root;
                const breadcrumbs: Breadcrumb[] = [];
                this.addBreadcrumb(root, [], breadcrumbs);

                this._breadcrumbs$.next(breadcrumbs);
            });
    }

    private addBreadcrumb(
        route: ActivatedRouteSnapshot,
        parentUrl: string[],
        breadcrumbs: Breadcrumb[],
    ) {
        const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
        const breadcrumbKey = route.data['breadcrumbKey'] as string | undefined;
        const breadcrumb = route.data['breadcrumb'] as string | undefined;
        const parentBreadcrumbKey = route.parent?.data?.['breadcrumbKey'] as string | undefined;
        const parentBreadcrumb = route.parent?.data?.['breadcrumb'] as string | undefined;

        const crumbId = breadcrumbKey ?? breadcrumb;
        const parentCrumbId = parentBreadcrumbKey ?? parentBreadcrumb;

        if (crumbId && crumbId !== parentCrumbId) {
            breadcrumbs.push({
                labelKey: breadcrumbKey,
                label: breadcrumbKey ? undefined : breadcrumb,
                url: '/' + routeUrl.join('/'),
            });
        }

        if (route.firstChild) {
            this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
        }
    }
}
