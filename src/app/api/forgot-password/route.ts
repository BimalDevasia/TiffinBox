import { NextResponse } from 'next/server';
import User from '@/models/userSchema';
import connectMongoDB from '@/lib/mongodb';

export async function POST(request: Request) {
    const { email } = await request.json();

    try {
        await connectMongoDB();
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'An error occurred. Please try again later.' }, { status: 500 });
    }
}