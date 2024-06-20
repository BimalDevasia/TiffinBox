"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const DeleteAccount = () => {
    const router = useRouter();

    const handleDeleteAccount = async () => {
        try {
            const response = await fetch('/api/deactivate', {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Account deleted successfully');
                router.push('/login'); // Redirect to the home page or any other desired page
            } else {
                const { error } = await response.json();
                alert(`Error deleting account: ${error}`);
            }
        } catch (error) {
            console.error('Error deleting account:', error);
            alert('An error occurred while deleting the account');
        }
    };

    return (
        <div className='bg-black text-white h-screen flex flex-col items-center gap-3 justify-center text-center' >
            <h1 className='text-[40px] text-inyellow '>Delete Account</h1>
            <p className='text-[20px]'>Are you sure you want to delete your account?<br /> This action cannot be undone.</p>
            <button onClick={handleDeleteAccount} className='bg-inyellow p-3 rounded-lg text-black'>Delete Account</button>
        </div>
    );
};

export default DeleteAccount;