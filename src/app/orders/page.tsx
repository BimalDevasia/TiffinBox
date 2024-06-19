"use client";

import { Order } from "@/models/types";
import React, { useEffect, useState } from "react";

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("/api/order");
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto py-8 bg-black h-full pt-20">
            <h1 className="text-3xl font-bold mb-6 text-white">ORDERS</h1>
            {orders.length === 0 ? (
                <p>You haven't placed any orders yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order) => (
                        <div
                            key={order._id}
                            className="bg-white/40 rounded-lg shadow-md p-6 flex flex-col"
                        >
                            <h2 className="text-xl font-bold mb-2">Order #{order._id}</h2>
                            <p className="mb-2">
                                Placed on: {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                            <div className="flex-grow">
                                <h3 className="text-lg font-bold mb-2">Items:</h3>
                                <ul>
                                    {order.items.map((item: any) => (
                                        <li key={item.product} className="mb-2">
                                            <div className="flex items-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-12 h-12 object-cover rounded-md mr-2"
                                                />
                                                <div>
                                                    <p className="font-bold">{item.name}</p>
                                                    <p className="text-[13px]">
                                                        Quantity: {item.quantity} - Price: ₹
                                                        {(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                            <hr className="mt-2 "/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <p className="font-bold">Total Amount: ₹{order.totalAmount.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;