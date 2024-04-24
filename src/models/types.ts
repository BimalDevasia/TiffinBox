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