"use client"
import React,{ useState,useEffect } from 'react'
import { CiGrid42 } from "react-icons/ci";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineNoDrinks } from "react-icons/md";
import DeleteUser from '../deleteuser/page';
import AdminPage from '@/app/addfood/page'
import InsertDrink from '@/app/adddrink/page'
import DeleteItem from '@/app/deletefood/page'
import DeleteDrink from '@/app/deletedrink/page'
import TransactionsPage from '@/app/gettransaction/page'
import AllOrders from '@/app/getorders/page'





function page() {


    
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

    


    const handleClick=(items:any)=>{
        setActiveItem(items.id)

    }

  return (

    <div className='flex flex-row max-w-screen  overflow-y-auto'>
    
        <div className='flex flex-row gap-4 z-0 items-center min-w-[250px] bg-gradient-to-b from-gray-500 to-black/80 min-h-screen '>
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
                {activeItem=="MANAGE USER"&&<DeleteUser/>}
                {activeItem==="ADD FOOD"&&<AdminPage/>}
                {activeItem==="ADD DRINKS"&&<InsertDrink/>}
                {activeItem==="REMOVE FOOD"&&<DeleteItem/>}
                {activeItem==="REMOVE DRINK"&&<DeleteDrink/>}
                {activeItem==="TRANSACTION"&&<TransactionsPage/>}
                {activeItem==="ORDERS"&&<AllOrders/>}
    </div>
    </div>
  )
}

export default page;