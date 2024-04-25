'use client';

import React, { useState } from 'react';

const InsertDrink = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [count, setCount] = useState(0);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const drinkData = { name, description, price, imageUrl, count };

        try {
            const response = await fetch('/api/drinks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(drinkData),
            });

            if (response.ok) {
                console.log('Drink inserted successfully');
                setName('');
                setDescription('');
                setPrice(0);
                setImageUrl('');
                setCount(0);
            } else {
                console.error('Failed to insert drink');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Insert Drink</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="count">Count:</label>
                    <input
                        type="number"
                        id="count"
                        value={count}
                        onChange={(e) => setCount(parseInt(e.target.value))}
                        required
                    />
                </div>
                <button type="submit">Insert Drink</button>
            </form>
        </div>
    );
};

export default InsertDrink;