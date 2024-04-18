import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import User from '@/models/userSchema';

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();

    const { name, email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    return NextResponse.json({ id: user._id, name, email }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';