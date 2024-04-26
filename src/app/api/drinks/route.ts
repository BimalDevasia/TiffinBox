import { NextResponse } from 'next/server';
import DrinkItem from '@/models/drinksSchema';
import connectMongoDB from '@/lib/mongodb';

export async function GET(request: Request) {
    try {
        await connectMongoDB();
        const drinkItems = await DrinkItem.find({});
        return NextResponse.json(drinkItems);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch drink items' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectMongoDB();
        const { name, description, price, imageUrl, count } = await request.json();

        const newDrink = new DrinkItem({
            name,
            description,
            price,
            imageUrl,
            count
        });

        await newDrink.save();

        return NextResponse.json({ message: 'Drink inserted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to insert drink' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        await connectMongoDB();
        const { name } = await request.json();

        if (!name) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }

        const deletedDrink = await DrinkItem.findOneAndDelete({ name });

        if (!deletedDrink) {
            return NextResponse.json({ error: 'Drink not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Drink deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete drink' }, { status: 500 });
    }
}