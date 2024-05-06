import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import Order from "@/models/orderSchema";

export async function GET(req: NextRequest) {
    try {
        await connectMongo();
        const orders = await Order.find({});
        const transactions = orders.map((order) => ({
            userId: order.userId,
            amount: order.totalAmount,
            date: order.createdAt,
        }));

        return NextResponse.json(transactions, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 });
    }
}