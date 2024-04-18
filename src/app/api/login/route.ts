import connectMongoDB from '@/lib/mongodb';
import User from '@/models/userSchema';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {

    // Extract email and password from the request body
    const { email, password } = await req.json();

    try {
        // Connect to MongoDB
        await connectMongoDB();

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: 'Invalid email or password', status: 404 });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json({ message: 'Invalid email or password', status: 404 })
        }

        // Successful login
        return NextResponse.json({ message: 'Login successful', user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Internal server error', status: 500 });
    }
}