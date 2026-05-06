/** GET /api/v1/Order/my-orders */
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
