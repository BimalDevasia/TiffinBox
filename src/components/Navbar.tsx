"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  const data = [
    { id: "Home", link: "/home" },
    { id: "Menu", link: "menu" },
    { id: "Transactions", link: "transaction" },
    { id: "Profile", link: "profile" },
    { id: "Login", link: "login" },
    { id: "About", link: "about" }
  ];
  const [activeItem, setActiveItem] = useState("/");

  const handleClick = (item: { id: string; link: string }) => {
    setActiveItem(item.id);
    console.log(activeItem);
  }

  return (
    <>
      <nav className='flex justify-center z-50'>
        <Image width={0} height={0} alt='' src={"/item.png"} className='absolute z-50 w-7 left-20 top-5'></Image>
        <div className='fixed flex gap-16 mt-5 z-50 text-[18px] text-white'>
          {data.map((item) => (
            <Link key={item.id} href={item.link} onClick={() => handleClick(item)}>
              <div className={`${activeItem === item.id ? "text-inyellow border-b-inyellow border-b-[3px] " : ""}group z-50 relative hover:text-inyellow`}>
                {item.id}
                <div className='absolute w-0 group-hover:w-[100%] h-[2.5px] z-50 transition-all duration-[0.45s] bg-inyellow'></div>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
