import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
    const { items, totalAmount, customerName, customerAddress } = await req.json();

    const stripeAmount = Math.round(parseFloat(totalAmount) * 100);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: stripeAmount,
            currency: 'inr',
            automatic_payment_methods: { enabled: true },
            description: 'Export of digital goods',
            metadata: {
                exportDescription: 'Software subscription',
            },
            shipping: {
                name: customerName,
                address: {
                    line1: customerAddress,
                },
            },
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.error('Error creating payment intent:', err);
        return NextResponse.json({ error: 'Failed to create payment intent' }, { status: 500 });
    }
}