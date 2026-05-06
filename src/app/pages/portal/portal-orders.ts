import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { OrderService } from '@/core/services/order.service';
import { MyOrderResponse } from '@/core/models/my-order.model';

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
    ],
    providers: [MessageService],
    template: `
        <p-toast />
        <div class="card">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                    <div class="text-2xl font-semibold text-surface-900 dark:text-surface-0">My orders</div>
                    <p class="text-surface-600 dark:text-surface-200 m-0">Same API as Rahhala-Site my-orders.</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <label class="text-sm font-medium text-surface-700 dark:text-surface-100 whitespace-nowrap"
                        >Status</label
                    >
                    <p-select
                        [options]="statusOptions"
                        [ngModel]="selectedOrderStatus"
                        (ngModelChange)="onStatusFilterChange($event)"
                        optionLabel="label"
                        optionValue="value"
                        placeholder="All"
                        styleClass="min-w-48"
                    />
                </div>
            </div>

            <p-table
                #dt
                [value]="orders"
                [loading]="loading"
                [paginator]="true"
                paginatorDropdownAppendTo="body"
                [rows]="10"
                [showCurrentPageReport]="true"
                responsiveLayout="scroll"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
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
                                placeholder="Search orders"
                                class="w-full"
                            />
                        </p-icon-field>
                        <button
                            pButton
                            pRipple
                            type="button"
                            icon="pi pi-refresh"
                            label="Refresh"
                            outlined
                            (click)="loadOrders()"
                            [disabled]="loading"
                        ></button>
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th pSortableColumn="orderNumber" class="white-space-nowrap">
                            <span class="flex items-center gap-2">Order # <p-sortIcon field="orderNumber" /></span>
                        </th>
                        <th pSortableColumn="orderDate" class="white-space-nowrap">
                            <span class="flex items-center gap-2">Date <p-sortIcon field="orderDate" /></span>
                        </th>
                        <th pSortableColumn="orderTypeName" class="white-space-nowrap">
                            <span class="flex items-center gap-2">Type <p-sortIcon field="orderTypeName" /></span>
                        </th>
                        <th pSortableColumn="originCity" class="white-space-nowrap">
                            <span class="flex items-center gap-2">Origin <p-sortIcon field="originCity" /></span>
                        </th>
                        <th pSortableColumn="destinationCity" class="white-space-nowrap">
                            <span class="flex items-center gap-2">Destination <p-sortIcon field="destinationCity" /></span>
                        </th>
                        <th pSortableColumn="companyName" class="white-space-nowrap">
                            <span class="flex items-center gap-2">Company <p-sortIcon field="companyName" /></span>
                        </th>
                        <th pSortableColumn="statusId" class="white-space-nowrap">
                            <span class="flex items-center gap-2">Status <p-sortIcon field="statusId" /></span>
                        </th>
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
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="7" class="text-center py-6 text-surface-500">No orders found.</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `,
})
export class PortalOrders implements OnInit {
    private readonly orderService = inject(OrderService);
    private readonly messageService = inject(MessageService);

    orders: (MyOrderResponse & { statusLabel: string })[] = [];
    loading = false;
    selectedOrderStatus: number | null = null;

    readonly statusOptions: StatusOption[] = [
        { label: 'All statuses', value: null },
        { label: 'Status 1', value: 1 },
        { label: 'Status 2', value: 2 },
        { label: 'Status 3', value: 3 },
        { label: 'Status 4', value: 4 },
        { label: 'Status 5', value: 5 },
        { label: 'Status 6', value: 6 },
    ];

    ngOnInit(): void {
        this.loadOrders();
    }

    onStatusFilterChange(value: number | null): void {
        this.selectedOrderStatus = value;
        this.loadOrders();
    }

    loadOrders(): void {
        this.loading = true;
        this.orderService.getMyOrders(this.selectedOrderStatus ?? undefined).subscribe({
            next: (data) => {
                const list = data ?? [];
                this.orders = list.map((o) => ({
                    ...o,
                    orderTypeName: o.orderTypeName?.trim() || `Type ${o.orderType}`,
                    statusLabel: this.statusLabel(o.statusId),
                }));
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                this.orders = [];
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load orders.',
                });
            },
        });
    }

    onGlobalFilter(table: Table, event: Event): void {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    statusLabel(id: number): string {
        return `Order status ${id}`;
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
