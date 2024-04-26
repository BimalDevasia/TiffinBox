import { NextResponse } from 'next/server';
import FoodItem from '@/models/foodItem';
import connectMongoDB from '@/lib/mongodb';

export async function DELETE(request: Request) {
    try {
        await connectMongoDB();
        const { name } = await request.json();

        const deletedFoodItem = await FoodItem.findOneAndDelete({ name });

        if (!deletedFoodItem) {
            return NextResponse.json({ error: 'Food item not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Food item deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete food item' }, { status: 400 });
    }
}