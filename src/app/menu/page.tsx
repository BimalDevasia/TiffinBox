import React from 'react'
import items from "./data"

const foodtype=["BREAKFAST","LUNCH","SNACKS","DINNER","DRINKS"]



function page() {
  return (
    
    <div className='flex flex-col items-center w-screen bg-no-repeat bg-cover h-screen bg-menu text-white'>
      <div className='absolute h-full w-full bg-black -z-10 opacity-75'></div>
      <h1 className='font-poppins font-extrabold text-[40px] mt-3 mb-5'>Our Menu</h1>
      <div className='flex w-2/3 h-10 justify-center gap-5 mb-9'>
      { foodtype.map((items,id)=>(
        <div className=' flex justify-center items-center w-[10rem] hover:bg-inyellow hover:text-black rounded-3xl border-solid border-inyellow  border-[1px]' key={id}>{items}</div>
        ))}
      </div>

        <div className='grid grid-cols-2 w-9/12 h-3/4 gap-6 overflow-y-scroll'>
          
        {items.map((item,id)=>(
          <div key={id} className='box flex w-full '>
            <div style={{ backgroundImage: `url(${item.link})` }} className='relative h-full w-[35%] bg-no-repeat  bg-cover'></div>
            <div className='w-[65%] bg-white/5 shadow-md rounded-lg backdrop-blur filter px-5 py-7'>
              <p className='text-[25px]'>{item.name}</p>
              <p>{item.desp}</p>
              <p className='text-[25px]'>Price : {item.price}₹</p>
            </div>
            </div>
        ))}


        </div>

        
          


        

    </div>
  )
}

export default page