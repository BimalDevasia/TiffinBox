"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Login = () => {

  const [pass1, change1] = useState("password")
  const [pass2, change2] = useState("password")

  const toggle1 = () => {
    if (pass1 === "password")
      change1("text")
    else
      change1("password")

  }
  const toggle2 = () => {
    if (pass2 === "password")
      change2("text")
    else
      change2("password")

  }



  return (
    <div className='h-screen w-full relative flex bg-black font-bebasneue'>


      <div className='bg-food avg:block hidden relative bg-cover bg-no-repeat w-[28%] h-full'>
        <div className='absolute h-full w-full bg-gradient-to-b from-[rgb(0,0,0,0.9)] to-[rgb(0,0,0,0.2)]'></div>
        <Image className="z-1" src="" alt="Not Working  " />
        <div className='flex  absolute gap- items-center bottom-48'>
          <h1 className='text-8xl bg-gradient-to-b from-white to to-black text-transparent bg-clip-text font-bold font-bebasneue'>01</h1>
          <p className='text-white font-semibold font-bebasneue'>GOOD FOOD IS THE FOUNDATION <br /> OF GENUINE HAPPINESS</p>
        </div>
      </div>



      <div className='flex flex-col avg:absolute items-center gap-20 relative top-0 right-0 w-screen avg:w-[79%] h-screen rounded-3xl bg-gradient-to-bl from-[rgb(0, 0, 0, 1)] to-[rgba(38, 34, 34, 1)] text-white'>


        <div className='flex avg:w-9/12 w-[50%] items-center justify-between pt-12 text-inyellow '>

          <div className='flex gap-3'>
            <Link href="register">
              <div className='flex med:w-24 w-10 med:h-14 h-10 justify-center cursor-pointer items-center rounded-md hover:bg-ingrey hover:text-white med:text-[17px] text-[10px]'>Sign up
              </div></Link>
            <div className='flex med:w-24 w-10 med:h-14 h-10 justify-center cursor-pointer rounded-md items-center bg-ingrey text-white  med:text-[17px] text-[10px]'>Sign in</div>
          </div>
          <div className='flex gap-3'>
            <div className='flex med:w-24 w-10 med:h-14 h-10  justify-center cursor-pointer items-center rounded-md bg-ingrey text-white med:text-[17px] text-[10px]'>User</div>
            <div className='flex med:w-24 w-10 med:h-14 h-10  justify-center cursor-pointer items-center hover:bg-ingrey rounded-md hover:text-white med:text-[17px] text-[10px]'>Admin</div>
          </div>
        </div>

        <div className='flex w-9/12 justify-between  '>

          <div className='w-1/3 hidden med:block'>

            <h6 className='text-2xl mb-3 font-bebasneue'>WELCOME</h6>
            <p className='text-5xl font-bebasneue'>is simply dummy <br /> text of the <br />printing and lorem <br />ipsum industry</p>

          </div >

          <form className='flex  flex-col med:w-7/12 w-full gap-10'>

            <input className='h-20 focus:outline-none bg-ingrey px-[3rem] rounded-lg' placeholder='Email or Phone Number' type="text" name="" id="email" required />

            <div className='relative'>
              <input className='h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg' placeholder='Password' type={`${pass1}`} name="" id="password1" />
              <Image onClick={toggle1} width={0} height={0} className='absolute w-7 top-[50%] translate-y-[-50%] right-12' src="/Lock.svg" alt="" />
            </div>

            <div className='flex justify-between'>
              <button type='submit' className='bg-inyellow rounded-lg w-[10rem] text-black  h-[4.5rem] font-bold text-[20px]'>SIGN IN</button>
              <div className='relative'>
                <p className='text-[17px]'>Don&apos;t have an account yet?<br />Sign up now!</p>
                <Link href="/register"><p className='absolute left-0 text-inyellow'>Register</p></Link>
              </div>
            </div>


          </form>



        </div>

      </div>




    </div>
  )
}

export default Login