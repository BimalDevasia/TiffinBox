import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import HelpRequest from '@/models/helpSchema';

export async function POST(req: NextRequest) {
    try {
        const { userInput } = await req.json();

        await connectMongoDB();

        const newHelpRequest = new HelpRequest({ userInput });
        await newHelpRequest.save();

        return NextResponse.json({ message: 'Help request submitted successfully' });
    } catch (error) {
        console.error('Error submitting help request:', error);
        return NextResponse.json({ error: 'An error occurred while submitting the help request' }, { status: 500 });
    }
}