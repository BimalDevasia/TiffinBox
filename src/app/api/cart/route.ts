import { getServerSession } from 'next-auth';
import Cart from '@/models/cartSchema';
import { authOptions } from '../auth/[...nextauth]/route';
import connectMongo from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { user } = session;
        const { id: userId } = user;

        await connectMongo();

        const cart = await Cart.findOne({ userId });
        const items = cart ? cart.items : [];

        return NextResponse.json(items, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch cart' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { user } = session;
        const { id: userId } = user;
        const { product, name, desp, price, image, count, quantity } = await req.json();

        await connectMongo();

        const cart = await Cart.findOneAndUpdate(
            { userId },
            {
                $addToSet: {
                    items: { product, name, desp, price, image, count, quantity },
                },
            },
            { new: true, upsert: true }
        );

        return NextResponse.json(cart.items, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to add item to cart' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { user } = session;
        const { id: userId } = user;
        const { itemId } = await req.json();

        await connectMongo();

        const cart = await Cart.findOneAndUpdate(
            { userId },
            {
                $pull: {
                    items: { product: itemId },
                },
            },
            { new: true }
        );

        return NextResponse.json(cart.items, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to remove item from cart' }, { status: 500 });
    }
}