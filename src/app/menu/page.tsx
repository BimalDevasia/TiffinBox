"use client"
import React, { useState,useRef } from 'react';
import Drink from '@/components/Drink';
import Cards from '@/components/Cards';
import Comment from '@/components/Comment';
import breakfast from "./breakfast"
import snack from "./snack";
import lunch from "./lunch";
import dinner from "./dinner"
const foodtype = [
  { id: "BREAKFAST", point: "breakfast" },
  { id: "LUNCH", point: "lunch" },
  { id: "SNACKS", point: "snack" },
  { id: "DINNER", point: "dinner" },
  { id: "DRINKS", point: "drink" }
];


function Page() {
  const [check, setCheck] = useState("breakfast");
 const [item, setItem]=useState(breakfast);
  const drinkRef = useRef<HTMLDivElement>(null);
  const handleClick = (point:any) => {
    if (point !== "drink") {
      setCheck(point);
    }
    if (point === "drink") {
      drinkRef.current?.scrollIntoView({ behavior: "smooth" }); 
      setCheck((prevCheck)=>prevCheck);
      point=check;
    }
    
    switch (point) {
      case "breakfast":
        setItem(breakfast);
        break;
      case "lunch":
        setItem(lunch);
        break;
      case "snack":
        setItem(snack);
        break;
      case "dinner":
        setItem(dinner);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='flex flex-col items-center w-screen bg-no-repeat bg-cover h-screen bg-menu text-white pt-10'>
        <div className='absolute h-full w-full top-0 bg-black/30 -z-10'></div>
        <h1 className='font-poppins font-extrabold text-[40px] mt-3 mb-5'>Our Menu</h1>
        <div className='flex w-2/3 h-10 justify-center gap-5 mb-9'>
          {foodtype.map((item, id) => (
            <div key={id} onClick={() => handleClick(item.point)} className={`flex justify-center items-center w-[10rem] cursor-pointer ${check===item.point? "bg-inyellow  text-black":"" } hover:bg-inyellow hover:text-black rounded-3xl border-solid border-inyellow border-[1px]`}>
              {item.id}
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 w-9/12 h-3/4 gap-6 overflow-y-scroll'>
          {item.map((item, id) => (
            <div key={id} className='box flex w-full'>
              <div style={{ backgroundImage: `url(${item.link})` }} className='h-full w-[35%] bg-no-repeat bg-cover'></div>
              <div className='group hover:text-black relative w-[65%] bg-white/5 shadow-md rounded-lg backdrop-blur filter px-5 py-7'>
                <div className='absolute w-full h-full right-0 top-0 group-hover:visible invisible -z-10 rounded-lg bg-gradient-to-b from-first to-second'></div>
                <p className='text-[25px]'>{item.name}</p>
                <p>{item.desp}</p>
                <p className='text-[25px]'>Price : {item.price}₹</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          
      <div ref={drinkRef}>
        <Drink />
      </div>
      <Cards />
      <Comment />
    </>
  );
}

export default Page;
