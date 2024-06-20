'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserDelete } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
import Logout from '@/components/logout';
import DeleteAccount from '../deactivate/page';
import Orders from '../orders/page';
import { FaHandsHelping } from "react-icons/fa";
import HelpPage from '../help/page';
import ProtectedRoute from '../components/ProtectedRoute';

const Profile = () => {
    const { data: session } = useSession();
    const userName = session?.user?.name || 'User';
    const [activeItem, setActiveItem] = useState("PROFILE");

    const items1 = [{ id: "PROFILE" },
    { id: "DEACTIVATE" },
    { id: "ORDERS" },
    { id: "HELP REQUEST" }]

    const items2 = [{ id: "PROFILE" },
    { id: "DEACTIVATE" },
    { id: "ORDERS" },
    { id: "HELP REQUEST" }]

    const iconSelect = (item: any) => {
        if (item === "PROFILE")
            return <CgProfile className={`${activeItem === item ? "text-inyellow " : "text-white"} w-[40px] h-[40px]`} />
        if (item === "DEACTIVATE")
            return <AiOutlineUserDelete className={`${activeItem === item ? "text-inyellow " : "text-white"} w-[40px] h-[40px]`} />
        if (item === "ORDERS")
            return <IoFastFoodSharp className={`${activeItem === item ? "text-inyellow " : "text-white"} w-[40px] h-[40px]`} />
        if (item === "HELP REQUEST")
            return <FaHandsHelping className={`${activeItem === item ? "text-inyellow " : "text-white"} w-[40px] h-[40px]`} />

    }

    const handleClick = (items: any) => {
        setActiveItem(items.id)

    }

    return (
        <ProtectedRoute>
            <div className='flex flex-row max-w-screen w-screen overflow-y-auto'>
                <div className='flex flex-row gap-4 z-0 items-center min-w-[250px] bg-gradient-to-b from-gray-500 to-black/80 min-h-screen '>
                    <div className='relative flex flex-col z-10 items-center justify-center gap-5 bg-black/40 h-[60%] w-[20%] mix-blend-color-dodge border-r border-solid'>
                        <div className='absolute w-full -top-7  skew-y-[35deg] bg-black/40  h-[50px] border-r border-solid border-t'></div>
                        <div className='absolute w-full -bottom-7  skew-y-[-35deg] bg-black/40 h-[50px] border-r border-solid  border-b'></div>
                        {items1.map((items, index) => (
                            <div key={index} onClick={() => handleClick(items)} className='z-10 cursor-pointer'>
                                {iconSelect(items.id)}
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-8 text-white'>
                        {items2.map((items, index) => (
                            <div key={index} onClick={() => handleClick(items)} className={`${activeItem === items.id ? "text-inyellow " : ""} text-xl cursor-pointer  `}> {items.id}</div>
                        ))}
                    </div>
                </div>
                <div className='max-w-[1290px] w-full float-right'>
                    {activeItem == "PROFILE" && <Logout userName={userName} />}
                    {activeItem === "DEACTIVATE" && <DeleteAccount />}
                    {activeItem === "ORDERS" && <Orders />}
                    {activeItem === "HELP REQUEST" && <HelpPage />}
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default Profile;