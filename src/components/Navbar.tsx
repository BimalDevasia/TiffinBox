"use client"

import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
   var data = [
    { id: "Home", link: "/" },
    { id: "Menu", link: "menu" },
    { id: "Transactions", link: "transaction" },
    { id:"Cart",link:"cart"},
    { id: "Profile", link: "profile" },
    { id: "About", link: "about" }
  ];
  const [activeItem, setActiveItem] = useState("/");
  const [nonav,setnonav]=useState(false);
  const handleClick = (item: { id: string; link: string }) => {
    setActiveItem(item.id);
  }

  const pathname = usePathname();
  useEffect(()=>{
    if(pathname==="/")
      setActiveItem("Home")
    else if(pathname==="/menu")
      setActiveItem("Menu")
    else if(pathname==="/transaction")
      setActiveItem("Transactions")
    else if(pathname==="/cart")
      setActiveItem("Cart")
    else if(pathname==="/profile")
      setActiveItem("Profile")
    else if(pathname==="/about")
      setActiveItem("About")
    else
    setActiveItem("/")

    if(pathname==="/admin" || pathname==="/login"|| pathname==="/admin-login"||pathname==="/register")
      setnonav(false)
    else
    setnonav(true)
  },[pathname]);
  
  return (
    <>
    {nonav && <nav className='flex justify-center z-50'>
        <Image width={0} height={0} alt='' src={"/logo.svg"} className='absolute z-50 w-10 left-20 top-5'></Image>
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
      </nav>}
    </>
  )
}

export default Navbar ;
