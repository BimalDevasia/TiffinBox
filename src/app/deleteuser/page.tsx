"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../components/ProtectedRoute';

const DeleteUser = () => {
    const [userId, setUserId] = useState('');
    const router = useRouter();

    const handleDeleteUser = async () => {
        try {
            const response = await fetch('/api/deleteuser', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId }),
            });

            if (response.ok) {
                alert('User deleted successfully');
                router.push('/login');
                const { error } = await response.json();
                alert(`Error deleting user: ${error}`);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('An error occurred while deleting the user');
        }
    };

    return (
        <ProtectedRoute>
            <div className='bg-black w-[1288px] h-screen flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-white text-xl'>Delete User</h1>
                <div><input
                    type="text"
                    placeholder="Enter user ID"
                    value={userId}

                    onChange={(e) => setUserId(e.target.value)}
                    className='mr-5 focus:outline-none w-[400px] h-[54px] p-4 rounded-lg bg-ingrey text-white'
                />
                    <button onClick={handleDeleteUser} className=' p-4 bg-inyellow text-black rounded-lg'>Delete User</button>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default DeleteUser;