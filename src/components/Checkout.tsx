import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';

interface CheckoutFormProps {
    clientSecret: string;
    setClientSecret: React.Dispatch<React.SetStateAction<string>>;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
    totalAmount: string;
    router: ReturnType<typeof useRouter>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
    clientSecret,
    setClientSecret,
    cart,
    setCart,
    totalAmount,
    router,
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [customerLine, setCustomerLine] = useState('');
    const [customerPost, setCustomerPost] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerState, setCustomerState] = useState('');
    const [customerCountry, setCustomerCountry] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);

        const paymentMethodRes = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)!,
                billing_details: {
                    name: customerName,
                    address: {
                        line1: customerLine,
                        postal_code: customerPost,
                        city: customerCity,
                        state: customerState,
                        country: customerCountry,
                    },
                },
            },
        });
        if (paymentMethodRes.error) {
            setError(paymentMethodRes.error.message!);
            setProcessing(false);
        } else if (paymentMethodRes.paymentIntent?.status === 'succeeded') {
            try {
                const response = await fetch('/api/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ items: cart, totalAmount }),
                });

                if (response.ok) {
                    setCart([]);
                    setClientSecret('');
                    router.push('/orders');
                } else {
                    console.error('Failed to place order');
                }
            } catch (error) {
                console.error('Error placing order:', error);
            }
        } else {
            setError('Something went wrong. Please try again later.');
            setProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='relative flex flex-col gap-5 bg-payment bg-no-repeat bg-cover  bg- justify-center items-center w-screen h-screen bg-black text-white'>
            <div className='absolute w-full h-full bg-black/50'></div>
            <h1 className='text-2xl text-inyellow font-bold mb-20 z-10'>PAYMENT DETAILS</h1>
            <div className='flex flex-row gap-5 z-10'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-3'>
                        <label htmlFor="customerName">Customer Name</label>
                        <input
                            type="text"
                            id="customerName"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className='h-[35px] rounded-lg bg-white/60 text-black p-3  focus:outline-none'
                            required
                        />
                    </div>
                    <div className='flex flex-row gap-3'>
                        <label htmlFor="customerLine">Customer Line</label>
                        <input
                            type="text"
                            id="customerLine"
                            value={customerLine}
                            onChange={(e) => setCustomerLine(e.target.value)}
                            className='h-[35px] rounded-lg bg-white/60 text-black p-3  focus:outline-none'
                            required
                        />
                    </div>
                    <div className='flex flex-row gap-3'>
                        <label htmlFor="customerPost">Customer Post</label>
                        <input
                            type="text"
                            id="customerPost"
                            value={customerPost}
                            onChange={(e) => setCustomerPost(e.target.value)}
                            className='h-[35px] rounded-lg bg-white/60 text-black p-3  focus:outline-none'
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-3'>
                        <label htmlFor="customerCity">Customer City</label>
                        <input
                            type="text"
                            id="customerCity"
                            value={customerCity}
                            onChange={(e) => setCustomerCity(e.target.value)}
                            className='h-[35px] rounded-lg bg-white/60 text-black p-3  focus:outline-none'
                            required
                        />
                    </div>
                    <div className='flex flex-row gap-3'>
                        <label htmlFor="customerState">Customer State</label>
                        <input
                            type="text"
                            id="customerState"
                            value={customerState}
                            onChange={(e) => setCustomerState(e.target.value)}
                            className='h-[35px] rounded-lg bg-white/60 text-black p-3  focus:outline-none'
                            required
                        />
                    </div>
                    <div className='flex flex-row gap-3'>
                        <label htmlFor="customerCountry">Customer Country</label>
                        <input
                            type="text"
                            id="customerCountry"
                            value={customerCountry}
                            onChange={(e) => setCustomerCountry(e.target.value)}
                            className='h-[35px] rounded-lg bg-white/60 text-black p-3  focus:outline-none'
                            required
                        />
                    </div>
                </div>
            </div>
            <CardElement className=' w-[800px] border-2 border-dashed p-5 z-10'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#ffffff',
                            '::placeholder': {
                                color: '#FFFFFF',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />

            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button
                type="submit"
                disabled={!stripe || processing}
                className="px-4 z-10 py-3 mb-2 inline-block text-lg w-[200px] text-center font-medium text-black bg-inyellow/80 border border-transparent rounded-md hover:bg-inyellow cursor-pointer">
                {processing ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

export default CheckoutForm;