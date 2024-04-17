import React from 'react'
import Image from 'next/image'
import { IoFastFoodOutline } from "react-icons/io5";
function New() {
  return (
   <div className='w-screen h-screen '>
    <p>WHY CHOOSE OUR FOOD </p>
    <div className='flex justify-center items-center'>
      <div className='flex flex-col items-center  w-[300px] h-auto bg-white px-5 pt-10 pb-10'>
      <IoFastFoodOutline className='text-inyellow h-16 w-16'/>
    <p className='pt-10 text-2xl'>QUALITY FOOD</p>
    <p className='tracking-widest text-center pt-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et, tempora modi perferendis quaerat quibusdam iusto asper</p>
      </div>
      <div></div>
      <div></div>
    </div>
   </div>
  )
}


export default New