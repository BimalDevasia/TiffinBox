// app/models/foodItem.ts
import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    count: { type: Number, required: true }
});

const FoodItem = mongoose.models.FoodItem || mongoose.model('FoodItem', foodItemSchema);

export default FoodItem;