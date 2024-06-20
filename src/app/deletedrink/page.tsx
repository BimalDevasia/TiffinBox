'use client';

import React, { useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

const DeleteDrink = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/drinks', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });

            if (response.ok) {
                console.log('Drink deleted successfully');
                setName('');
            } else {
                console.error('Failed to delete drink');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <ProtectedRoute>
            <div className='bg-black w-[1288px] h-screen flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-inyellow text-xl'>Delete Drink</h1>
                <form onSubmit={handleSubmit} className='flex flex-row'>
                    <div>

                        <input
                            type="text"
                            id="name"
                            value={name}
                            placeholder='Enter the drink name'
                            onChange={(e) => setName(e.target.value)}
                            required
                            className='mr-5 focus:outline-none w-[400px] h-[54px] p-4 rounded-lg bg-ingrey text-white'
                        />
                    </div>
                    <button type="submit" className=' p-4 bg-inyellow text-black rounded-lg'>Delete Drink</button>
                </form>
            </div>
        </ProtectedRoute>
    );
};

export default DeleteDrink;