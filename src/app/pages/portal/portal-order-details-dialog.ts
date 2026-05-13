import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, model, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IftaLabelModule } from 'primeng/iftalabel';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';
import { OrderService } from '@/core/services/order.service';
import { OrderDetailsResponse } from '@/core/models/order-details.model';

@Component({
    selector: 'app-portal-order-details-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        TagModule,
        TextareaModule,
        IftaLabelModule,
        TranslateModule,
    ],
    templateUrl: './portal-order-details-dialog.html',
})
export class PortalOrderDetailsDialog {
    private readonly orderService = inject(OrderService);
    private readonly messageService = inject(MessageService);
    private readonly translate = inject(TranslateService);

    /** Two-way with parent: `[(visible)]="detailsOpen"` */
    readonly visible = model(false);
    readonly orderId = input<string | null>(null);

    readonly details = signal<OrderDetailsResponse | null>(null);
    readonly loading = signal(false);
    readonly cancelling = signal(false);
    readonly cancelDialogVisible = signal(false);
    readonly cancelReasonText = signal('');
    readonly cancelReasonError = signal(false);

    constructor() {
        effect(() => {
            const open = this.visible();
            const id = this.orderId();
            if (open && id) {
                this.loadDetails(id);
            }
            if (!open) {
                this.details.set(null);
                this.loading.set(false);
                this.cancelDialogVisible.set(false);
            }
        });
    }

    orderTypeText(d: OrderDetailsResponse | null): string {
        if (!d) return '—';
        return d.orderType?.trim() || '—';
    }

    statusText(d: OrderDetailsResponse | null): string {
        if (!d) return '—';
        return d.statusName?.trim() || '—';
    }

    statusSeverityForDetails(d: OrderDetailsResponse | null): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
        const s = (d?.statusName || '').toLowerCase();
        if (s.includes('new') || s.includes('pending')) return 'warn';
        if (s.includes('done') || s.includes('completed') || s.includes('delivered')) return 'success';
        if (s.includes('cancel') || s.includes('reject') || s.includes('failed')) return 'danger';
        return 'info';
    }

    orderTypeSeverity(d: OrderDetailsResponse | null): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
        const t = (d?.orderType || '').toLowerCase();
        if (t.includes('cargo')) return 'info';
        if (t.includes('personal')) return 'success';
        if (t.includes('corporate')) return 'warn';
        return 'secondary';
    }

    isCarRentalOrder(d: OrderDetailsResponse | null): boolean {
        return !!d?.carRental;
    }

    isCargoShippingOrder(d: OrderDetailsResponse | null): boolean {
        return !!d?.cargoShipping;
    }

    pickupSourceText(d: OrderDetailsResponse | null): string {
        const v = d?.carRental?.isFromHeadquarters;
        if (v == null) return '—';
        return v
            ? this.translate.instant('portal.orderDetails.pickupHeadquarters')
            : this.translate.instant('portal.orderDetails.pickupMyLocation');
    }

    hasValue(value: unknown): boolean {
        if (value == null) return false;
        if (typeof value === 'string') return value.trim().length > 0;
        if (Array.isArray(value)) return value.length > 0;
        return true;
    }

    openCancelDialog(): void {
        this.cancelDialogVisible.set(true);
        this.cancelReasonText.set('');
        this.cancelReasonError.set(false);
    }

    onCancelDialogVisible(v: boolean): void {
        this.cancelDialogVisible.set(v);
    }

    confirmCancelOrder(): void {
        const id = this.orderId();
        if (!id) return;
        const reason = this.cancelReasonText().trim();
        this.cancelReasonError.set(true);
        if (!reason) return;
        this.cancelling.set(true);
        this.orderService.cancelOrder(id, reason).subscribe({
            next: () => {
                this.cancelling.set(false);
                this.cancelDialogVisible.set(false);
                this.messageService.add({
                    severity: 'success',
                    summary: this.translate.instant('portal.orderDetails.toastSuccess'),
                    detail: this.translate.instant('portal.orderDetails.cancelSuccess'),
                });
                this.loadDetails(id);
            },
            error: () => {
                this.cancelling.set(false);
                this.messageService.add({
                    severity: 'error',
                    summary: this.translate.instant('portal.orderDetails.toastError'),
                    detail: this.translate.instant('portal.orderDetails.cancelFailed'),
                });
            },
        });
    }

    private loadDetails(id: string): void {
        this.loading.set(true);
        this.orderService.getOrderDetails(id).subscribe({
            next: (res) => {
                if (!this.visible()) {
                    this.loading.set(false);
                    return;
                }
                this.details.set(res);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                if (!this.visible()) {
                    return;
                }
                this.details.set(null);
                this.messageService.add({
                    severity: 'error',
                    summary: this.translate.instant('portal.orderDetails.toastError'),
                    detail: this.translate.instant('portal.orderDetails.loadFailed'),
                });
            },
        });
    }
}
