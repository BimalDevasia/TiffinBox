// /api/reset-password.ts
import { NextResponse } from 'next/server';
import User from '@/models/userSchema';
import connectMongoDB from '@/lib/mongodb';

export async function PUT(request: Request) {
    const { email, password } = await request.json();

    try {
        await connectMongoDB();
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: 'User not found.' }, { status: 404 });
        }

        user.password = password;
        await user.save();

        return NextResponse.json({ message: 'Password updated successfully.' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'An error occurred. Please try again later.' }, { status: 500 });
    }
}