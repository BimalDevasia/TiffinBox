import React, { useState, useEffect, useContext } from 'react';
import { DrinkItem } from '@/models/types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import drinks from "./drinks"
import CartContext from '@/context/CartContext';
function Drink() {
  const { addItemToCart } = useContext(CartContext);
  const [drinkItems, setDrinkItems] = useState<DrinkItem[]>([]);
  useEffect(() => {
    const fetchDrinkItems = async () => {
      try {
        const response = await fetch('/api/drinks');
        const data: DrinkItem[] = await response.json();
        setDrinkItems(data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchDrinkItems();
  }, []);


  return (
    <div className='h-screen w-screen bg-drink bg-cover bg-no-repeat object-cover flex flex-col gap-5 items-center justify-center text-white'>
      <p className='text-5xl'>DRINKS</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus suscipit at molestiae beatae. Adipisci ratione quas sun</p>
      <Carousel className='w-[80%] h-[500px] text-white'>
        <CarouselContent className='flex gap-5 h-[500px]'>
          {drinkItems.map((item, index) => (
            <CarouselItem
              key={index}
              className='group relative flex justify-center basis-1/4 bg-no-repeat bg-cover bg-center rounded-lg'
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute -mx-3 tracking-widest -rotate-90 text-2xl text-white left-0 top-[50%]">
                {item.name}
              </div>
              <div className='pt-9'>{item.description}</div>
              <div className='absolute bottom-10 flex gap-3 flex-col items-center invisible group-hover:visible transition-all '>
                <span className='text-2xl'>PRICE :{item.price}₹</span>
                <button
                  type='submit'
                  className='bg-inyellow rounded-lg w-[10rem] text-black h-10 font-bold text-[20px]'
                  onClick={() => {
                    if (item.count <= 0) {
                      alert('Out of Stock');
                    } else {
                      addItemToCart({
                        product: item._id,
                        name: item.name,
                        desp: item.description,
                        price: item.price,
                        image: item.imageUrl,
                        count: item.count,
                      });
                    }
                  }}
                >
                  ORDER NOW
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Drink;