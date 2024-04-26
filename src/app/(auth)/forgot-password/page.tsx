"use client"
import { useState } from 'react';
import TitleBar from "@/components/TitleBar";
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (data.success) {
        // Navigate to the reset password page if the email is found
        router.push('/reset-password');
      } else {
        setMessage(data.message);
      }
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
          <div className='bg-forgot avg:block hidden relative bg-cover bg-no-repeat w-[28%] h-full'></div>
          <div className='w-screen avg:w-[72%] h-min rounded-3xl text-white mt-40 px-10'>
            <div className='flex justify-around w-full '>
              <div className='w-1/3'>
                <h6 className='text-4xl mb-3 font-bebasneue'>FORGOT <br />PASSWORD ?</h6>
                <p className='text-2xl font-bebasneue'>Enter the email address associated with account</p>
              </div>
              <form onSubmit={handleSubmit} className='flex flex-col med:w-7/12 w-full gap-10'>
                <input
                  className='h-20 focus:outline-none bg-ingrey px-[3rem] rounded-lg'
                  placeholder='Email address'
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="w-full place-items-center flex justify-between">
                  <p className="text-inyellow">Try Another Way</p>
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

export default ForgotPassword;