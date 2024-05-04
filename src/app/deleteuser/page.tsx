"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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
                router.push('/login'); // Redirect to the home page or any other desired page
            } else {
                const { error } = await response.json();
                alert(`Error deleting user: ${error}`);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('An error occurred while deleting the user');
        }
    };

    return (
        <div>
            <h1>Delete User</h1>
            <input
                type="text"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleDeleteUser}>Delete User</button>
        </div>
    );
};

export default DeleteUser;