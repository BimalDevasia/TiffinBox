"use client"

import { useState } from 'react';
import TitleBar from "@/components/TitleBar";
import { useRouter } from 'next/navigation';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('/api/reset-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            setMessage(data.message);
            router.push('/login');
        } catch (error) {
            console.error(error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className="w-screen h-screen bg-black">
                <TitleBar />
                <div className='h-screen w-full relative flex bg-black font-bebasneue'>
                    <div className='bg-reset avg:block hidden relative bg-cover bg-no-repeat w-[28%] h-full'></div>
                    <div className='w-screen avg:w-[72%] h-min rounded-3xl text-white mt-40 px-10'>
                        <div className='flex justify-around w-full '>
                            <div className='w-1/3'>
                                <h6 className='text-4xl mb-3 font-bebasneue'>RESET YOUR <br />PASSWORD !</h6>
                                <p className='text-2xl font-bebasneue'>Change your password and continue ordering</p>
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-col w-7/12 gap-10'>
                                <input
                                    className='h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg'
                                    placeholder='Confirm Email address'
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <div className='relative'>
                                    <input
                                        className='h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg'
                                        placeholder='Password'
                                        type='password'
                                        name='password'
                                        id='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='relative'>
                                    <input
                                        className='h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg'
                                        placeholder='Confirm Password'
                                        type='password'
                                        name='confirmPassword'
                                        id='confirmPassword'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="w-full place-items-center flex justify-between">
                                    <button type='submit' className='bg-inyellow rounded-lg w-[10rem] text-black h-[4.5rem] font-bold text-[20px]'>SUBMIT</button>
                                </div>
                                {message && <p>{message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;