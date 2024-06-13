"use client"
import React, { useEffect, useState } from "react";
import { Order } from "@/models/types";

const AllOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [searchDate, setSearchDate] = useState<string>("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("/api/getorders");
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    const handleSearchDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchDate(event.target.value);
    };

    const filteredOrders = orders.filter((order) => {
        const orderDate = new Date(order.createdAt).toISOString().slice(0, 10);
        return orderDate === searchDate || searchDate === "";
    });

    return (
        <div className="container mx-auto py-8 w-[1288px] bg-black text-white min-h-screen pt-32">
            <h1 className="text-3xl font-bold mb-6">All Orders</h1>
            <div className="mb-4">
                <label htmlFor="search-date" className="mr-2">
                    Search by Date:
                </label>
                <input
                    id="search-date"
                    type="date"
                    value={searchDate}
                    onChange={handleSearchDateChange}
                    className="border rounded-md px-2 py-1"
                />
            </div>
            {filteredOrders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Order ID</th>
                            <th className="px-4 py-2">User ID</th>
                            <th className="px-4 py-2">Order Date</th>
                            <th className="px-4 py-2">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((order) => (
                            <tr key={order._id}>
                                <td className="border px-4 py-2">{order._id}</td>
                                <td className="border px-4 py-2">{order.userId}</td>
                                <td className="border px-4 py-2">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </td>
                                <td className="border px-4 py-2">${order.totalAmount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AllOrders;