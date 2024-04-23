import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import drinks from "./drinks"
function Drink() {
  return (
    <div className='h-screen w-screen bg-drink bg-cover bg-no-repeat object-cover flex flex-col items-center justify-center text-white'>
          <p>DRINKS</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus suscipit at molestiae beatae. Adipisci ratione quas sun</p>
          <Carousel className='w-[80%] h-[500px] text-white'>
    <CarouselContent className='flex gap-5 h-[500px]'>
      {drinks.map((item,index)=>(
 <CarouselItem className='group relative flex justify-center basis-1/4 bg-no-repeat bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${item.link})` }} >
  <div className="absolute -mx-3 tracking-widest -rotate-90 text-2xl text-white left-0 top-[50%]">
      {item.name}
    </div>
<div className='pt-9'>{item.desc}</div>
<div className='absolute bottom-10 flex gap-3 flex-col items-center invisible group-hover:visible transition-all '>
  <span className='text-2xl'>PRICE :{item.price} INR</span>
  <button type='submit' className='bg-inyellow rounded-lg w-[10rem] text-black  h-10 font-bold text-[20px]'>ORDER NOW</button>

  </div>
  
 </CarouselItem>
      ))}
     
     
       </CarouselContent>
      <CarouselPrevious />
        <CarouselNext />
    </Carousel>
        </div>

  )
}

export default Drink;