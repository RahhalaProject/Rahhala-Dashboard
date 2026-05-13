import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../config/app.config';
import { MyOrderResponse } from '../models/my-order.model';
import { OrderDetailsResponse } from '../models/order-details.model';

export interface OrderManagementPage {
    items: MyOrderResponse[];
    totalRecords: number;
}

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    private readonly http = inject(HttpClient);
    private readonly config = inject(APP_CONFIG) as AppConfig;
    private readonly apiUrl = `${this.config.apiUrl}/v1`;

    /**
     * GET /api/v1/OrderManagement?page=&limit=
     * Optional orderStatus preserved for UI filter if the API supports it.
     */
    getOrderManagement(page: number, limit: number, orderStatus?: number): Observable<OrderManagementPage> {
        let params = new HttpParams().set('page', String(page)).set('limit', String(limit));
        if (orderStatus != null && !Number.isNaN(orderStatus)) {
            params = params.set('orderStatus', String(orderStatus));
        }
        return this.http.get<unknown>(`${this.apiUrl}/OrderManagement`, { params }).pipe(
            map((body) => this.normalizeOrderManagementPage(body)),
            catchError((err) => {
                console.error('Order OrderManagement error:', err);
                return throwError(() => err);
            }),
        );
    }

    private normalizeOrderManagementPage(res: unknown): OrderManagementPage {
        if (Array.isArray(res)) {
            const items = res as MyOrderResponse[];
            return { items, totalRecords: items.length };
        }
        if (res && typeof res === 'object') {
            const o = res as Record<string, unknown>;
            const listKeys = ['data', 'items', 'result', 'results', 'dataList', 'orders', 'records'];
            let items: MyOrderResponse[] | undefined;
            for (const key of listKeys) {
                const v = o[key];
                if (Array.isArray(v)) {
                    items = v as MyOrderResponse[];
                    break;
                }
            }
            const totalKeys = ['totalCount', 'total', 'totalRecords', 'count', 'recordCount'];
            let total: number | undefined;
            for (const key of totalKeys) {
                const v = o[key];
                if (typeof v === 'number' && !Number.isNaN(v)) {
                    total = v;
                    break;
                }
            }
            if (items) {
                return { items, totalRecords: total ?? items.length };
            }
        }
        return { items: [], totalRecords: 0 };
    }

    /** GET /api/v1/OrderManagement/{orderId}/details */
    getOrderDetails(orderId: string): Observable<OrderDetailsResponse> {
        return this.http.get<OrderDetailsResponse>(`${this.apiUrl}/OrderManagement/${orderId}/details`).pipe(
            catchError((err) => {
                console.error('Order details error:', err);
                return throwError(() => err);
            }),
        );
    }

    /** POST /api/v1/Order/cancel/{orderId} */
    cancelOrder(orderId: string, cancelReason: string): Observable<unknown> {
        return this.http.post(`${this.apiUrl}/Order/cancel/${orderId}`, { cancelReason }).pipe(
            catchError((err) => {
                console.error('Order cancel error:', err);
                return throwError(() => err);
            }),
        );
    }
}
