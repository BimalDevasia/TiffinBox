"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProtectedRoute from '@/app/components/ProtectedRoute';

const OrderDetails = () => {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');

    const [orderData, setOrderData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await fetch(`/api/getorders/${orderId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch order data');
                }
                const data = await response.json();
                setOrderData(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (orderId) {
            fetchOrderData();
        } else {
            setError('Order ID is missing');
            setIsLoading(false);
        }
    }, [orderId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!orderData) {
        return <div>No order data found</div>;
    }

    return (
        <ProtectedRoute>
            <div className="container mx-auto py-8 w-[1288px] bg-black text-white min-h-screen pt-32">
                <h1 className="text-3xl font-bold mb-6 text-inyellow">Order Details</h1>
                <p>Order ID: {orderData._id}</p>
                <p>User ID: {orderData.userId}</p>
                <p>Total Amount: ${orderData.totalAmount.toFixed(2)}</p>
                <p>Order Date: {new Date(orderData.createdAt).toLocaleDateString()}</p>
                <h2 className="text-2xl font-bold mt-6 mb-4">Ordered Items</h2>
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-inyellow">
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.items.map((item: any, index: any) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.product}</td>
                                <td className="border px-4 py-2">{item.name}</td>
                                <td className="border px-4 py-2">{item.desp}</td>
                                <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
                                <td className="border px-4 py-2">{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ProtectedRoute>
    );
};

export default OrderDetails;