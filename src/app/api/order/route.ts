import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import Order from "@/models/orderSchema";
import Cart from '@/models/cartSchema';
import connectMongo from "@/lib/mongodb";
import FoodItem from "@/models/foodItem";
import DrinkItem from "@/models/drinksSchema";

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

        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
    }
}
export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { user } = session;
        const { id: userId } = user;
        const { items, totalAmount } = await req.json();

        console.log("Received order data:", { userId, items, totalAmount });

        await connectMongo();

        const newOrder = new Order({
            userId,
            items,
            totalAmount,
        });
        // const productStocks = await Promise.all(
        //     items.map(async (item: any) => {
        //         const product = await FoodItem.findOne({ _id: item.product });
        //         return { productId: item.product, count: product?.count || 0 };
        //     })
        // );
        const savedOrder = await newOrder.save();
        await Cart.findOneAndUpdate(
            { userId },
            { $set: { items: [] } },
            { new: true }
        );

        await Promise.all(
            items.map(async (item: any) => {
                const isFoodItem = await FoodItem.exists({ _id: item.product });
                const isDrinkItem = await DrinkItem.exists({ _id: item.product });

                if (isFoodItem) {
                    const product = await FoodItem.findOneAndUpdate(
                        { _id: item.product },
                        { $inc: { count: -item.quantity } },
                        { new: true }
                    );
                    if (product) {
                        console.log(`Updated stock for ${product.name}: ${product.count}`);
                    } else {
                        console.error(`Food item with ID ${item.product} not found`);
                    }
                } else if (isDrinkItem) {
                    const product = await DrinkItem.findOneAndUpdate(
                        { _id: item.product },
                        { $inc: { count: -item.quantity } },
                        { new: true }
                    );
                    if (product) {
                        console.log(`Updated stock for ${product.name}: ${product.count}`);
                    } else {
                        console.error(`Drink item with ID ${item.product} not found`);
                    }
                } else {
                    console.error(`Invalid item type for ${item.product}`);
                }
            })
        );

        return NextResponse.json(savedOrder, { status: 201 });
    } catch (error) {
        console.error("Error placing order:", error);
        return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
    }
}