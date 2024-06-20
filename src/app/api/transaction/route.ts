import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectMongo from "@/lib/mongodb";
import Order from "@/models/orderSchema";

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { user } = session;
        const { id: userId } = user;

        await connectMongo();

        const orders = await Order.find({ userId });

        const transactions = orders.map((order) => ({
            amount: order.totalAmount,
            date: order.createdAt,
        }));

        return NextResponse.json(transactions, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 });
    }
}