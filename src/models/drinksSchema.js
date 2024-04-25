import mongoose from 'mongoose';

const drinkItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    count: { type: Number, required: true }
});

const DrinkItem = mongoose.models.DrinkItem || mongoose.model('DrinkItem', drinkItemSchema);

export default DrinkItem;