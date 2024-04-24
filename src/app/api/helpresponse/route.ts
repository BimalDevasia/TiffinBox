import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import HelpRequest from '@/models/helpSchema';

export async function GET() {
    try {
        await connectMongoDB();
        const helpRequests = await HelpRequest.find({});
        return NextResponse.json(helpRequests);
    } catch (error) {
        console.error('Error fetching help requests:', error);
        return NextResponse.json({ error: 'An error occurred while fetching help requests' }, { status: 500 });
    }
}