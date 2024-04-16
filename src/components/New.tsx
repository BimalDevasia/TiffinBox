import React from 'react'

function New() {
  return (
    <div className='text-white'>
      <p className='text-center mt-[100px]'>WHY CHOOSE FOOD</p>
      <div className='grid grid-cols-3 gap-5 mt-[125px] pl-[200px]' >
      <div className='flex flex-col gap-3 justify-center text-white bg-white/15 items-center w-[250px] h-[360px] border-solid border-white border-[2px] rounded-lg p-4'>
       
       <img src="/logo1.png" alt="logo" className='h-12 w-auto m-auto self-start mt-3'/>
       <div className='gap=2 text-center p-4 '>
       <p className='font-bold'>QUALITY FOOD</p><br />
       <p className='text-center' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
       </div>


      </div>
      <div className='flex flex-row gap-3 justify-center text-white bg-white/15 items-center w-[250px] h-[360px] border-solid border-white border-[2px] rounded-lg p-4'></div>
      <div className='flex flex-row gap-3 justify-center text-white bg-white/15 items-center w-[250px] h-[360px] border-solid border-white border-[2px] rounded-lg p-4'></div>
      
      </div>
      </div>
  )
}


export default New