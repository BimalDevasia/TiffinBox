import connectMongoDB from '@/lib/mongodb';
import User from '@/models/userSchema';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

// admin.ts
export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    try {
        await connectMongoDB();
        const admin = await User.findOne({ email });

        if (!admin) {
            return NextResponse.json({ message: 'Invalid email or password' }, {
                status: 404
            });
        }

        // Check if the user is an admin
        if (admin.role !== 'admin') {
            return NextResponse.json({ message: 'You are not an admin' }, {
                status: 403
            });
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);

        if (!passwordMatch) {
            return NextResponse.json({ message: 'Invalid email or password' }, {
                status: 404
            });
        }

        return NextResponse.json({ message: 'Login successful', admin: { id: admin._id, email: admin.email } });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}