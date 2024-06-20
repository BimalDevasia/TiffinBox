'use client';

import React, { useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

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
        <ProtectedRoute>
            <div className='flex bg-black h-screen w-[80rem]'>
                <div className='items-center justify-center my-10 text-white flex flex-col gap-5 w-full'>
                    <h1 className='text-xl font-bold'>INSERT DRINK</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5 items-center '>
                        <div className='flex flex-row gap-5 w-2/3'>
                            <div className='flex flex-col gap-3'>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='focus:outline-none rounded-lg h-[40px] bg-ingrey w-[350px] p-3 text-white'
                                    />
                                </label>
                                <label>
                                    Price:
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(parseInt(e.target.value))}
                                        className='focus:outline-none rounded-lg h-[40px] bg-ingrey w-[350px] p-3 text-white'
                                    />
                                </label>
                                <label>
                                    Count:
                                    <input
                                        type="number"
                                        value={count}
                                        onChange={(e) => setCount(parseInt(e.target.value))}
                                        className='focus:outline-none rounded-lg h-[40px] bg-ingrey w-[350px] p-3 text-white'
                                    />
                                </label>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label>
                                    Description:
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className='focus:outline-none  rounded-lg h-[107px] w-[350px] bg-ingrey p-3 text-white leading-none'
                                    />
                                </label>
                                <label>
                                    Image URL:
                                    <input
                                        type="text"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                        className='focus:outline-none rounded-lg h-[40px] bg-ingrey w-[350px] p-3 text-white'
                                    />
                                </label>
                            </div>
                        </div>
                        <button type="submit" className='bg-inyellow text-black w-40 h-10 rounded-lg'>Insert Drink</button>
                    </form>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default InsertDrink;