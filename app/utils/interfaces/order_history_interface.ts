// Order History Interface
interface OrderHistory {
    _id: string;
    orderItems: [];
    shippingAddress: ShippingAddress;
    paymentMethod: string;
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
    isPaid: boolean;
    paidAt: Date | null;
}

// Shipping Address Interface
interface ShippingAddress {
    address: string;
    city: string;
    postalCode: string;
    country: string;
}