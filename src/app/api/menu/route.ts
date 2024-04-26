// app/api/foodItems/route.ts
import { NextResponse } from 'next/server';
import FoodItem from '@/models/foodItem';
import connectMongoDB from '@/lib/mongodb';

export async function GET(request: Request) {
    try {
        await connectMongoDB();
        const foodItems = await FoodItem.find({});
        return NextResponse.json(foodItems);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch food items' }, { status: 500 });
    }
}