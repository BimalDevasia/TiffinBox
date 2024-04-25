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
    category: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    count: number;
}

export type DrinkItem = {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    count: number;
};