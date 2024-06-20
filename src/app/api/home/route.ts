import mongoose from 'mongoose';
import Item from '@/models/foodSchema';
import connectMongoDB from '@/lib/mongodb';
import { Items } from '@/models/types';

export async function GET(request: Request) {
    try {
        await connectMongoDB();

        const currentHour = new Date().getHours();
        let mealTime: 'Breakfast' | 'Lunch' | 'Tea' | 'Dinner';

        if (currentHour >= 18 && currentHour < 24) {
            mealTime = 'Breakfast';
        } else if (currentHour >= 0 && currentHour < 10) {
            mealTime = 'Lunch';
        } else if (currentHour >= 10 && currentHour < 14) {
            mealTime = 'Tea';
        } else {
            mealTime = 'Dinner';
        }

        const items = await Item.find({ mealTime }) as Items[];;

        return new Response(JSON.stringify(items));
    } catch (error) {
        console.error('Error fetching items:', error);
        return new Response('Error fetching items', { status: 500 });
    }
}