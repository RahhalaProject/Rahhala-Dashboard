import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { OrderService } from '@/core/services/order.service';
import { MyOrderResponse } from '@/core/models/my-order.model';
import { PortalOrderDetailsDialog } from '@/pages/portal/portal-order-details-dialog';

interface StatusOption {
    label: string;
    value: number | null;
}

@Component({
    selector: 'app-portal-orders',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        IconFieldModule,
        InputIconModule,
        SelectModule,
        TagModule,
        ToastModule,
        RippleModule,
        PortalOrderDetailsDialog,
        TranslateModule,
    ],
    providers: [MessageService],
    template: `
        <p-toast />
        <app-portal-order-details-dialog [(visible)]="orderDetailsOpen" [orderId]="orderDetailsId" />
        <div class="card">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                    <div class="text-2xl font-semibold text-surface-900 dark:text-surface-0">
                        {{ 'portal.orders.title' | translate }}
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <label class="text-sm font-medium text-surface-700 dark:text-surface-100 whitespace-nowrap">{{
                        'portal.orders.filterStatus' | translate
                    }}</label>
                    <p-select
                        [options]="statusOptions"
                        [ngModel]="selectedOrderStatus"
                        (ngModelChange)="onStatusFilterChange($event)"
                        optionLabel="label"
                        optionValue="value"
                        [placeholder]="'portal.orders.filterPlaceholderAll' | translate"
                        styleClass="min-w-48"
                    />
                </div>
            </div>

            <p-table
                #dt
                [value]="orders"
                [loading]="loading"
                [lazy]="true"
                (onLazyLoad)="onLazyLoad($event)"
                [paginator]="true"
                paginatorDropdownAppendTo="body"
                [rows]="tableRows"
                [first]="tableFirst"
                [totalRecords]="totalRecords"
                [showCurrentPageReport]="true"
                responsiveLayout="scroll"
                [currentPageReportTemplate]="pageReportTemplate"
                [rowsPerPageOptions]="[10, 25, 50]"
                [globalFilterFields]="[
                    'orderNumber',
                    'orderTypeName',
                    'originCity',
                    'destinationCity',
                    'companyName',
                    'statusLabel',
                ]"
                dataKey="orderId"
            >
                <ng-template #caption>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <p-icon-field class="w-full sm:w-80">
                            <p-inputicon class="pi pi-search" />
                            <input
                                pInputText
                                type="text"
                                (input)="onGlobalFilter(dt, $event)"
                                [placeholder]="'portal.orders.searchPlaceholder' | translate"
                                class="w-full"
                            />
                        </p-icon-field>
                        <button
                            pButton
                            pRipple
                            type="button"
                            icon="pi pi-refresh"
                            [label]="'portal.orders.refresh' | translate"
                            outlined
                            (click)="loadOrders()"
                            [disabled]="loading"
                        ></button>
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th pSortableColumn="orderNumber" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colOrderNumber' | translate }} <p-sortIcon field="orderNumber"
                            /></span>
                        </th>
                        <th pSortableColumn="orderDate" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colDate' | translate }} <p-sortIcon field="orderDate"
                            /></span>
                        </th>
                        <th pSortableColumn="orderTypeName" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colType' | translate }} <p-sortIcon field="orderTypeName"
                            /></span>
                        </th>
                        <th pSortableColumn="originCity" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colOrigin' | translate }} <p-sortIcon field="originCity"
                            /></span>
                        </th>
                        <th pSortableColumn="destinationCity" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colDestination' | translate }} <p-sortIcon field="destinationCity"
                            /></span>
                        </th>
                        <th pSortableColumn="companyName" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colCompany' | translate }} <p-sortIcon field="companyName"
                            /></span>
                        </th>
                        <th pSortableColumn="statusId" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colStatus' | translate }} <p-sortIcon field="statusId"
                            /></span>
                        </th>
                        <th class="white-space-nowrap w-20 text-center">{{ 'portal.orders.colView' | translate }}</th>
                    </tr>
                </ng-template>
                <ng-template #body let-row>
                    <tr>
                        <td>{{ row.orderNumber || '—' }}</td>
                        <td>{{ row.orderDate | date: 'medium' }}</td>
                        <td>
                            <p-tag [value]="row.orderTypeName || '—'" severity="info"></p-tag>
                        </td>
                        <td>{{ row.originCity || '—' }}</td>
                        <td>{{ row.destinationCity || '—' }}</td>
                        <td>{{ row.companyName || '—' }}</td>
                        <td>
                            <p-tag [value]="row.statusLabel" [severity]="statusSeverity(row.statusId)"></p-tag>
                        </td>
                        <td class="text-center">
                            <button
                                type="button"
                                pButton
                                pRipple
                                icon="pi pi-eye"
                                [rounded]="true"
                                [text]="true"
                                severity="secondary"
                                (click)="openOrderDetails(row)"
                                [attr.aria-label]="
                                    'portal.orders.viewDetailsAria'
                                        | translate: { order: row.orderNumber || row.orderId }
                                "
                            ></button>
                        </td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="8" class="text-center py-6 text-surface-500">
                            {{ 'portal.orders.emptyMessage' | translate }}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `,
})
export class PortalOrders implements OnInit, OnDestroy {
    private readonly orderService = inject(OrderService);
    private readonly messageService = inject(MessageService);
    private readonly translate = inject(TranslateService);

    private langSub?: Subscription;

    orders: (MyOrderResponse & { statusLabel: string })[] = [];
    loading = false;
    totalRecords = 0;
    tableFirst = 0;
    tableRows = 10;
    selectedOrderStatus: number | null = null;

    orderDetailsOpen = false;
    orderDetailsId: string | null = null;

    statusOptions: StatusOption[] = [];
    pageReportTemplate = '';

    ngOnInit(): void {
        this.refreshLocalizedStrings();
        this.langSub = this.translate.onLangChange.subscribe(() => this.refreshLocalizedStrings());
    }

    ngOnDestroy(): void {
        this.langSub?.unsubscribe();
    }

    private refreshLocalizedStrings(): void {
        this.pageReportTemplate = this.translate.instant('portal.orders.pageReport');
        this.statusOptions = [
            { label: this.translate.instant('portal.orders.filterAllStatuses'), value: null },
            ...([1, 2, 3, 4, 5, 6] as const).map((n) => ({
                label: this.translate.instant(`portal.orders.statusFilter.${n}`),
                value: n,
            })),
        ];
    }

    onLazyLoad(event: TableLazyLoadEvent): void {
        this.tableFirst = event.first ?? 0;
        const rows = event.rows;
        this.tableRows = rows != null && rows > 0 ? rows : 10;
        this.fetchOrders();
    }

    onStatusFilterChange(value: number | null): void {
        this.selectedOrderStatus = value;
        this.tableFirst = 0;
        this.fetchOrders();
    }

    loadOrders(): void {
        this.fetchOrders();
    }

    private fetchOrders(): void {
        this.loading = true;
        const page = Math.floor(this.tableFirst / this.tableRows) + 1;
        const limit = this.tableRows;
        this.orderService.getOrderManagement(page, limit, this.selectedOrderStatus ?? undefined).subscribe({
            next: ({ items, totalRecords }) => {
                this.totalRecords = totalRecords;
                this.orders = (items ?? []).map((o) => ({
                    ...o,
                    orderTypeName:
                        o.orderTypeName?.trim() ||
                        this.translate.instant('portal.orders.typeFallback', { type: o.orderType }),
                    statusLabel: this.statusLabel(o.statusId),
                }));
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                this.orders = [];
                this.totalRecords = 0;
                this.messageService.add({
                    severity: 'error',
                    summary: this.translate.instant('portal.orders.toastError'),
                    detail: this.translate.instant('portal.orders.loadFailed'),
                });
            },
        });
    }

    onGlobalFilter(table: Table, event: Event): void {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openOrderDetails(row: MyOrderResponse & { statusLabel: string }): void {
        this.orderDetailsId = row.orderId;
        this.orderDetailsOpen = true;
    }

    statusLabel(id: number): string {
        return this.translate.instant(`portal.orders.status.${id}`);
    }

    statusSeverity(id: number): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
        const map: Record<number, 'success' | 'info' | 'warn' | 'danger' | 'secondary'> = {
            1: 'warn',
            2: 'success',
            3: 'info',
            4: 'danger',
            5: 'danger',
            6: 'secondary',
        };
        return map[id] ?? 'secondary';
    }
}
