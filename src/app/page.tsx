"use client";

import React, { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import { Items } from '@/models/types';
import Image from 'next/image';
import Cards from '@/components/Cards';
import Link from 'next/link';

function HomePage() {
  const [currentTime, setCurrentTime] = useState('');
  const [items, setItems] = useState<Items[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      let timeText = '';

      if (hours >= 18 && hours <24) {
        timeText = "Breakfast";
      } else if (hours >= 0 && hours < 10) {
        timeText = "Lunch";
      } else if (hours >= 10 && hours < 14) {
        timeText = "Tea";
      } else {
        timeText = "Dinner";
      }

      setCurrentTime(timeText);
    }, 1000);

    // Fetch items from the API
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/home');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();

    return () => clearInterval(interval);
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex relative justify-around items-center bg-home bg-cover h-screen w-screen bg-no-repeat">
        <div className="absolute bg-black/30 w-full h-full"></div>
        <div className="flex flex-col gap-3 text-white z-10">
          <p className="font-bold">WHAT TIME IS IT <span className="text-inyellow">?</span></p>
          <p className="font-bold text-6xl">ORDER <span className="text-inyellow">{currentTime}</span><br />NOW </p>
        </div>
        {items.map((item: Items, index) => (
          <div key={index} className=" relative flex flex-col justify-center  gap-3 z-10 text-white bg-white/15 items-center w-1/5 border-solid border-white border-[1px] rounded-lg p-4">
            <p className="text-[20px]">{item.name}</p>
            <Image src={item.link} alt='' width={300} height={100} className='w-full h-60 '></Image>
            <p className="text-center">{item.desp}</p>
            <p className="text-2xl"><span className="text-inyellow font-bold">PRICE :</span> {item.price} Rs</p>
            <button type="submit" className="w-full  bg-inyellow hover:bg-yellow-600 transition-colors duration-300 h-10 text-black rounded-lg font-bold"><Link href="/menu">ORDER NOW</Link></button>
          </div>
        ))}
      </div>
      <Cards />

    </ProtectedRoute>
  );
}

export default HomePage;