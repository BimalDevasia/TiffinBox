import React from 'react'
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

function Logout({ userName }: { userName: string }) {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut({ redirect: false });
            router.push('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className='h-screen relative flex flex-col bg-black font-bebasneue'>
            <div className="flex flex-col gap-3 items-center justify-center text-white flex-grow">
                <div className='flex gap-5 items-center'>
                    Name <div className='w-60 bg-ingrey h-10 p-2 rounded-lg'>{userName}</div></div>
                <div><button onClick={handleSignOut} className='w-32 bg-inyellow p-2 text-black rounded-lg cursor-pointer '>Sign Out</button></div>
            </div>
        </div>
    )
}

export default Logout