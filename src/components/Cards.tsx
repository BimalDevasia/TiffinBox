import React from 'react'
import Image from 'next/image'
import { IoFastFoodOutline } from "react-icons/io5";
import { PiBowlFood } from "react-icons/pi";
import { TbChefHat } from "react-icons/tb";
function Cards() {
  return (
   <div className='flex  flex-col gap-20 w-screen h-screen items-center bg-black justify-center'>
    <p className='text-3xl text-white'>WHY CHOOSE OUR FOOD </p>
   
    <div className='flex justify-center h- items-center  gap-24 '>
      <div className='group flex flex-col items-center  w-[300px] h-auto bg-boxcol text-white px-5 py-16 shadow-md rounded-lg hover:bg-gradient-to-r from-first/100 to-second hover:text-black'>
      <IoFastFoodOutline className='text-inyellow h-16 w-16 group-hover:text-black'/>
    <p className='pt-10 text-2xl'>QUALITY FOOD</p>
    <p className='tracking-widest text-center pt-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et, tempora modi perferendis quaerat quibusdam iusto asper</p>
      </div>
      <div className='group flex flex-col items-center  w-[300px] h-auto bg-boxcol text-white px-5 py-16 shadow-md rounded-lg hover:bg-gradient-to-r from-first/100 to-second hover:text-black'>
      <PiBowlFood  className='text-inyellow h-16 w-16 group-hover:text-black'/>
    <p className='pt-10 text-2xl'>SUPER TASTE</p>
    <p className='tracking-widest text-center pt-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et, tempora modi perferendis quaerat quibusdam iusto asper</p>
      </div>
      <div className='group flex flex-col items-center  w-[300px] h-auto bg-boxcol text-white px-5 py-16 shadow-md rounded-lg hover:bg-gradient-to-r from-first/100 to-second hover:text-black'>
      <TbChefHat  className='text-inyellow h-16 w-16 group-hover:text-black'/>
    <p className='pt-10 text-2xl'>PROFESSIONAL STAFFS</p>
    <p className='tracking-widest text-center pt-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et, tempora modi perferendis quaerat quibusdam iusto asper</p>
      </div>
    </div>
   </div>
  
  )
}


export default Cards