'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import TitleBar from "@/components/TitleBar"
const Profile = () => {
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
        <div className='h-screen w-full relative flex flex-col bg-black font-bebasneue'>
            <TitleBar />
            <div className="flex flex-col items-center  text-white flex-grow">
                {/* <div>
                    <img src="404.png" alt="404 Not Found" className="w-64 h-auto mb-20" />
                </div>
                <div className="text-center text-neutral-50 font-normal">
                    <p className="text-3xl">The page you're looking for doesn't exist or has been moved.</p>
                </div>
                <div className="mt-10">
                    <Link href="/">
                        <p className="bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 text-lg font-bold">Go back</p>
                    </Link>
                </div> */}
                <div><button onClick={handleSignOut}>Sign Out</button></div>
            </div>
        </div>
    )
}

export default Profile