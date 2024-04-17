"use client"
import TitleBar from "@/components/TitleBar";
import React, { useState } from 'react';
import Image from 'next/image';
const ResetPassword = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    return (
        <>
            <div className="w-screen h-screen bg-black">
                <TitleBar />
                <div className='h-screen w-full relative flex bg-black font-bebasneue'>

                    <div className='bg-reset avg:block hidden relative bg-cover bg-no-repeat w-[28%] h-full'></div>



                    <div className='w-screen avg:w-[72%] h-min rounded-3xl  text-white mt-40 px-10'>


                        <div className='flex justify-around w-full '>

                            <div className='w-1/3'>

                                <h6 className='text-4xl mb-3 font-bebasneue'>RESET YOUR <br />PASSWORD !</h6>
                                <p className='text-2xl font-bebasneue'>Change your password and continue ordering</p>

                            </div >




                            <form className='flex flex-col w-7/12 gap-10'>
                                

                                <div className='relative'>
                                    <input className='h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg' placeholder='Password' type={showPassword1 ? 'text' : 'password'} name='password1' id='password1' />
                                    <Image onClick={togglePasswordVisibility1} width={0} height={0} className='absolute w-7 top-[50%] translate-y-[-50%] right-12' src='/Lock.svg' alt='Toggle Password Visibility' />
                                </div>

                                <div className='relative'>
                                    <input className='h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg' placeholder='Confirm Password' type={showPassword2 ? 'text' : 'password'} name='password2' id='password2' />
                                    <Image onClick={togglePasswordVisibility2} width={0} height={0} className='absolute w-7 top-[50%] translate-y-[-50%] right-12' src='/Lock.svg' alt='Toggle Password Visibility' />
                                </div>

                                <div className="w-full place-items-center flex justify-between">

                                    <button type='submit' className='bg-inyellow rounded-lg w-[10rem] text-black  h-[4.5rem] font-bold text-[20px] '>SUBMIT</button>
                                </div>


                            </form>



                        </div>

                    </div>




                </div>

            </div>
        </>
    );
};

export default ResetPassword;

