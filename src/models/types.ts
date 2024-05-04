import mongoose from "mongoose";
export type Items = {
    name: string;
    link: string;
    desp: string;
    price: number;
    mealTime: 'Breakfast' | 'Lunch' | 'Tea' | 'Dinner';
};

export interface HelpRequest {
    _id: string;
    userInput: string;
    userEmail: string;
    createdAt: Date;
}
export interface FoodItem {
    _id: mongoose.Types.ObjectId;
    category: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    count: number;
}

export type DrinkItem = {
    _id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    count: number;
};

export interface Order {
    _id: string;
    createdAt: string;
    userId: string;
    items: {
        product: string;
        name: string;
        image: string;
        price: number;
        quantity: number;
    }[];
    totalAmount: number;
}

export interface Transaction {
    _id: string;
    userId: string;
    amount: number;
    date: string;
}

export interface TotalsObject {
    [key: string]: number;
}