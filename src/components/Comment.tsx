import React from 'react'

function Comment() {
  return (
    <div className='flex flex-col items-center w-screen h-screen text-white bg-black'>
        <p>WHAT PEOPLE SAY <br /> ABOUT US</p>
        <div className='relative w-[80%] flex  h-[80%] bg-green-300'>
        <div className=' absolute left-6 bottom-10 h-[280px] w-[22%] bg-white'></div>
        <div className=' absolute left-[27%] bottom-20 h-[280px] w-[22%] bg-white'></div>
        <div className=' absolute left-[52%] top-0 h-[280px] w-[22%] bg-white'></div>
        <div className=' absolute left-[52%] top-[50%] h-[280px] w-[22%] bg-white'></div>
        <div className=' absolute left-[76%] h-[280px] bottom-0 w-[22%] bg-white'></div>
        <div className=' absolute left-[76%] h-[280px] bottom-[50%] w-[22%] bg-white'></div>





  </div>
        
    </div>
  )
}

export default Comment