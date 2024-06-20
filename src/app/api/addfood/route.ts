import { NextResponse } from 'next/server';
import FoodItem from '@/models/foodItem';
import connectMongoDB from '@/lib/mongodb';

export async function POST(request: Request) {
    try {
        await connectMongoDB();

        const { name, description, price, category, imageUrl, count } = await request.json();

        const newFoodItem = new FoodItem({
            name,
            description,
            price,
            category,
            imageUrl,
            count,
        });

        await newFoodItem.save();

        return NextResponse.json({ message: 'Food item created successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create food item' }, { status: 400 });
    }
}