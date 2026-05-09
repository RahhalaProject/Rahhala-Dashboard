/** Order row shape for GET /api/v1/OrderManagement (and similar list endpoints). */
export interface MyOrderResponse {
    orderId: string;
    orderNumber: string | null;
    orderDate: string;
    orderType: number;
    orderTypeName: string | null;
    originCity: string | null;
    destinationCity: string | null;
    companyName: string | null;
    statusId: number;
}
