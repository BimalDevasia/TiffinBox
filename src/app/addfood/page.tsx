// app/admin/page.tsx
'use client';

import React, { useState } from 'react';

const AdminPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [count, setCount] = useState(0); // New state variable

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/addfood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, description, price, category, imageUrl, count }), // Include count in the request body
            });

            if (response.ok) {
                console.log('Food item added successfully');
                // Reset form fields
                setName('');
                setDescription('');
                setPrice(0);
                setCategory('');
                setImageUrl('');
                setCount(0); // Reset count
            } else {
                console.error('Failed to add food item');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='flex'>
            <div className='align-center justify-center my-10'>
                <h1>Add Food Item</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                        />
                    </label>
                    <label>
                        Category
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </label>
                    <label>
                        Image:
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </label>
                    <label>
                        Count:
                        <input
                            type="number"
                            value={count}
                            onChange={(e) => setCount(parseInt(e.target.value))}
                        />
                    </label>
                    <button type="submit">Add Food Item</button>
                </form>
            </div>
        </div>
    );
};

export default AdminPage;