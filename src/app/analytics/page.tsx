'use client';

import React, { useState, useEffect } from 'react';
import { DrinkItem, FoodItem } from '@/models/types';

const foodTypes = [
    { id: 'BREAKFAST', point: 'breakfast' },
    { id: 'LUNCH', point: 'lunch' },
    { id: 'SNACKS', point: 'snack' },
    { id: 'DINNER', point: 'dinner' },
    { id: 'DRINKS', point: 'drink' },
];

function Page() {
    const [check, setCheck] = useState('breakfast');
    const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
    const [drinkItems, setDrinkItems] = useState<DrinkItem[]>([]);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const response = await fetch('/api/menu');
                const data: FoodItem[] = await response.json();
                setFoodItems(data);
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchFoodItems();
    }, []);

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

    const handleClick = (point: string) => {
        setCheck(point);
    };

    const filteredFoodItems = foodItems.filter((item) => item.category === check);
    // const filteredDrinkItems = drinkItems.filter((item) => item.category === 'DRINKS');

    return (
        <>
            <div className="flex flex-col items-center w-screen bg-no-repeat bg-cover h-screen bg-menu text-white pt-10">
                <div className="absolute h-full w-full top-0 bg-black/30 -z-10"></div>
                <h1 className="font-poppins font-extrabold text-[40px] mt-3 mb-5">
                    Analytics
                </h1>
                <div className="flex w-2/3 h-10 justify-center gap-5 mb-9">
                    {foodTypes.map((type, id) => (
                        <div
                            key={id}
                            onClick={() => handleClick(type.point)}
                            className={`flex justify-center items-center w-[10rem] cursor-pointer ${check === type.point ? 'bg-inyellow text-black' : ''
                                } hover:bg-inyellow hover:text-black rounded-3xl border-solid border-inyellow border-[1px]`}
                        >
                            {type.id}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 w-9/12 h-3/4 gap-6 overflow-y-scroll">
                    {check === 'drink' ? (
                        drinkItems.map((item, id) => (
                            <div key={id} className="box flex w-full">
                                <div
                                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                                    className="h-full w-[35%] bg-no-repeat bg-cover"
                                ></div>
                                <div className="group hover:text-black relative w-[65%] bg-white/5 shadow-md rounded-lg backdrop-blur filter px-5 py-7">
                                    <div className="absolute w-full h-full right-0 top-0 group-hover:visible invisible -z-10 rounded-lg bg-gradient-to-b from-first to-second"></div>
                                    <p className="text-[25px]">{item.name}</p>
                                    <div className="flex gap-6 ">
                                        <p className="text-[25px]">Count : {item.count}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        filteredFoodItems.map((item, id) => (
                            <div key={id} className="box flex w-full">
                                <div
                                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                                    className="h-full w-[35%] bg-no-repeat bg-cover"
                                ></div>
                                <div className="group hover:text-black relative w-[65%] bg-white/5 shadow-md rounded-lg backdrop-blur filter px-5 py-7">
                                    <div className="absolute w-full h-full right-0 top-0 group-hover:visible invisible -z-10 rounded-lg bg-gradient-to-b from-first to-second"></div>
                                    <p className="text-[25px]">{item.name}</p>
                                    <div className="flex gap-6 ">
                                        <p className="text-[25px]">Count : {item.count}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Page;