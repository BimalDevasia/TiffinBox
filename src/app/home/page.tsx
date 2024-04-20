import React from 'react'
import item from "./data.js";
function page() {
  return (

    <div className='flex relative justify-around items-center bg-home bg-cover h-screen w-screen bg-no-repeat '>
      <div className='absolute bg-black/30 w-full h-full '></div>
      <div className='flex flex-col gap-3 text-white z-10'>
        <p className='font-bold'>WHAT TIME IS IT <span className='text-inyellow'>?</span></p>
        <p className='font-bold text-6xl'>IT'S <span className='text-inyellow'>LUNCH</span><br />TIME </p>
      </div>
      {
        item.map((data, index) => (
          <div key={index} className='flex flex-col gap-3 justify-center z-10 text-white bg-white/15 items-center w-1/5 h-[530px] border-solid border-white border-[1px] rounded-lg p-4'>
            <p className='text-[20px]'>{data.name}</p>
            <img src={`${data.link}`} alt="nope" />
            <p className='text-center'>{data.desp}</p>
            <p className='text-[20px]'><span className='text-inyellow font-bold'>PRICE :</span> {data.price} Rs</p>
            <button type="submit" className='w-full bg-inyellow hover:bg-yellow-600 transition-colors duration-300 h-10 text-black rounded-lg font-bold'> ORDER NOW</button>
          </div>

        ))
      }

    </div>

  );
}

export default page