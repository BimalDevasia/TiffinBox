import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import connectMongo from '@/lib/mongodb';
import User from '@/models/userSchema';

export async function DELETE(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { user } = session;
        const userId = user.id;

        await connectMongo();

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Destroy the session after deleting the user
        const response = NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
        response.cookies.set('session', '', { maxAge: 0 }); // Clear the session cookie
        response.headers.set('Location', '/login'); // Set the redirect URL

        return response;
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}