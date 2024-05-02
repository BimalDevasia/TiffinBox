import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            product: { type: String, required: true },
            name: { type: String, required: true },
            desp: { type: String, required: true },
            price: { type: Number, required: true },
            // category: { type: String, required: true },
            image: { type: String, required: true },
            count: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;