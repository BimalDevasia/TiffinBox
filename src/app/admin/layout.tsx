"use client"
import React,{ useState,useEffect } from 'react'
import { CiGrid42 } from "react-icons/ci";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineNoDrinks } from "react-icons/md";


import { useRouter,usePathname } from 'next/navigation';
function layout({children}:any) {

    const router=useRouter()
    
    const [activeItem,setActiveItem]=useState("MANAGE USER");

    const items1=[{id:"MANAGE USER"},
                 {id:"ADD FOOD"},
                 {id:"ADD DRINKS"},
                 {id:"REMOVE FOOD"},
                 {id:"REMOVE DRINK"},
                 {id:"TRANSACTION"},
                 {id:"ORDERS"},
    ]

    const items2=[{id:"MANAGE USER"},
                 {id:"ADD FOOD"},
                 {id:"ADD DRINKS"},
                 {id:"REMOVE FOOD"},
                 {id:"REMOVE DRINK"},
                 {id:"TRANSACTION"},
                {id:"ORDERS"},
]

const iconSelect=(item:any)=>{
    if(item==="MANAGE USER")
        return <CiGrid42 className={`${activeItem===item?"text-inyellow ":"text-white"} w-[40px] h-[40px]`}/>
    if(item==="ADD FOOD")
        return <FaBowlFood className={`${activeItem===item?"text-inyellow ":"text-white"} w-[40px] h-[40px]`}/>
    if(item==="ADD DRINKS")
        return <RiDrinks2Fill className={`${activeItem===item?"text-inyellow ":"text-white"} w-[40px] h-[40px]`}/>
    if(item==="REMOVE FOOD")
        return <MdDelete className={`${activeItem===item?"text-inyellow ":"text-white"} w-[40px] h-[40px]`}/>
    if(item==="REMOVE DRINK")
        return <MdOutlineNoDrinks className={`${activeItem===item?"text-inyellow ":"text-white"} w-[40px] h-[40px]`}/>
    if(item==="TRANSACTION")
        return <GrTransaction className={`${activeItem===item?"text-inyellow ":"text-white"} w-[40px] h-[40px]`} />
    if(item==="ORDERS")
        return <IoDocumentTextOutline className={`${activeItem===item?"text-inyellow ":"text-white"} w-[40px] h-[40px]`}/>
    

}

    
const a=usePathname();

useEffect(()=>{
    const varchange=(value:any)=>{
        if(value==="MANAGE USER"){
            if(a!="/admin/manageuser")
            router.push("manageuser")
        }
        if(value==="ADD FOOD"){
            if(a!="/admin/addfood")
            router.push("addfood")
        }
        if(value==="ADD DRINKS"){
            if(a!="/admin/adddrink")
            router.push("adddrink")
        }
        if(value==="REMOVE FOOD"){
            if(a!="/admin/removeitem")
            router.push("removeitem")
        }
        if(value==="REMOVE DRINK"){
            if(a!="/admin/removedrink")
            router.push("removedrink")
        }
        if(value==="TRANSACTION"){
            if(a!="/admin/transaction")
            router.push("transaction")
        }
        if(value==="ORDERS"){
            if(a!="/admin/orders")
            router.push("orders")
        }
    };
    varchange(activeItem);
},[activeItem])

    const handleClick=(items:any)=>{
        setActiveItem(items.id)

    }

  return (

    <div className='flex flex-row max-w-screen  overflow-y-auto'>
    
        <div className='flex flex-row gap-4 z-0 items-center min-w-[250px] bg-gradient-to-b from-gray-500 to-black/80 h-screen '>
        <div className='relative flex flex-col z-10 items-center justify-center gap-5 bg-black/40 h-[60%] w-[20%] mix-blend-color-dodge border-r border-solid'>
            <div className='absolute w-full -top-7  skew-y-[35deg] bg-black/40  h-[50px] border-r border-solid border-t'></div>
            <div className='absolute w-full -bottom-7  skew-y-[-35deg] bg-black/40 h-[50px] border-r border-solid  border-b'></div>
            {items1.map((items,index)=>(
                <div key={index} onClick={() => handleClick(items)} className='z-10 cursor-pointer'>
                {iconSelect(items.id)}
                </div>
            ))}
            
           </div>
            <div className='flex flex-col gap-8 text-white'>
                {items2.map((items,index)=>(
                   <div key={index} onClick={() => handleClick(items)} className={`${activeItem===items.id?"text-inyellow ":""} text-xl cursor-pointer  `}> {items.id}</div>
                ))}
            </div>
        </div>
    <div className='w-[1200px] float-right'>
 {children}
    </div>
    </div>
  )
}

export default layout