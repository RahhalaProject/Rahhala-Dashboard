import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';
import { Landing } from '@/pages/landing/landing';
import { Notfound } from '@/pages/notfound/notfound';
import { authGuard } from '@/core/guards/auth.guard';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            },
            {
                path: 'home',
                loadComponent: () => import('./app/pages/dashboards/ecommercedashboard').then((c) => c.EcommerceDashboard),
                data: { breadcrumbKey: 'portal.breadcrumb.home' },
            },
            {
                path: 'dashboard-ecommerce',
                pathMatch: 'full',
                redirectTo: 'home',
            },
            {
                path: 'orders',
                loadComponent: () => import('./app/pages/portal/portal-orders').then((c) => c.PortalOrders),
                data: { breadcrumbKey: 'portal.breadcrumb.orders' },
            },
            {
                path: 'sliders',
                loadComponent: () => import('./app/pages/portal/portal-sliders').then((c) => c.PortalSlidersComponent),
                data: { breadcrumbKey: 'portal.breadcrumb.sliders' },
            },
        ],
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    {
        path: 'auth',
        loadChildren: () => import('@/pages/auth/auth.routes'),
    },
    { path: '**', redirectTo: '/notfound' },
];
