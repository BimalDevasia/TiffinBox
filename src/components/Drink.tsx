import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Drink() {
  return (
    <div className='h-screen w-screen bg-drink bg-cover bg-no-repeat flex flex-col items-center justify-center text-white'>
          <p>DRINKS</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus suscipit at molestiae beatae. Adipisci ratione quas sun</p>
          <Carousel className='w-[500px] h-[500px] text-white'>
    <CarouselContent>
      <CarouselItem className='basis-1/3'>today</CarouselItem>
      <CarouselItem className='basis-1/3'>yesterday</CarouselItem>
      <CarouselItem className='basis-1/3'>tommorrow</CarouselItem>
      <CarouselItem className='basis-1/3'>night</CarouselItem>
      <CarouselItem className='basis-1/3'>noon</CarouselItem>

       </CarouselContent>
      <CarouselPrevious />
        <CarouselNext />
    </Carousel>
        </div>

  )
}

export default Drink;