import { model, models, Schema } from "mongoose"

const orderHistorySchema = new Schema<OrderHistory>({
    orderItems: Array,
    shippingAddress: {
        address: String,
        city: String,
        postalCode: String,
        country: String,
    },
    paymentMethod: String,
    itemsPrice: Number,
    shippingPrice: Number,
    taxPrice: Number,
    totalPrice: Number,
    isPaid: Boolean,
    paidAt: Date
},
{ timestamps: true }
);

const OrderHistory = models.OrderHistory || model('OrderHistory', orderHistorySchema);

export default OrderHistory;