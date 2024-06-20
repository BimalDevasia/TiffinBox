import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { PiBowlFood } from "react-icons/pi";
import { TbChefHat } from "react-icons/tb";

function Cards() {
  return (
    <div className='flex  flex-col gap-20 w-screen h-screen items-center bg-black justify-center'>
      <p className='text-3xl text-white'>WHY CHOOSE OUR FOOD </p>
      <div className='flex justify-center h- items-center  gap-24 '>
        <div className='group flex flex-col items-center  w-[300px] h-auto bg-boxcol text-white px-5 py-16 shadow-md rounded-lg hover:bg-gradient-to-r from-first/100 to-second hover:text-black'>
          <IoFastFoodOutline className='text-inyellow h-16 w-16 group-hover:text-black' />
          <p className='pt-10 text-2xl'>QUALITY FOOD</p>
          <p className='tracking-widest text-center pt-10'> Our app revolutionizes the way college students order food from their campus canteen. It's the ultimate solution for hungry students looking to simplify their dining experience and enjoy quality meals on campus.</p>
        </div>
        <div className='group flex flex-col items-center  w-[300px] h-auto bg-boxcol text-white px-5 py-16 shadow-md rounded-lg hover:bg-gradient-to-r from-first/100 to-second hover:text-black'>
          <PiBowlFood className='text-inyellow h-16 w-16 group-hover:text-black' />
          <p className='pt-10 text-2xl'>SUPER TASTE</p>
          <p className='tracking-widest text-center pt-10'> Whether you're craving comfort food or seeking healthy options, Tiffinbox ensures every dish delights your palate. From easy ordering to prompt delivery, enjoy a seamless culinary journey that brings the best flavors right to your doorstep.</p>
        </div>
        <div className='group flex flex-col items-center  w-[300px] h-auto bg-boxcol text-white px-5 py-16 shadow-md rounded-lg hover:bg-gradient-to-r from-first/100 to-second hover:text-black'>
          <TbChefHat className='text-inyellow h-16 w-16 group-hover:text-black' />
          <p className='pt-10 text-2xl'>PROFESSIONAL STAFFS</p>
          <p className='tracking-widest text-center pt-10'> Our app enables canteen managers to efficiently schedule shifts, assign tasks, and monitor performance in real-time. By facilitating seamless communication and task delegation, ensures a organized environment, enhancing service quality and student satisfaction.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards