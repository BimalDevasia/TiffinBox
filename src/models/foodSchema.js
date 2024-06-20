import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desp: { type: String, required: true },
    price: { type: Number, required: true },
    link: { type: String, required: true },
    mealTime: { type: String, required: true, enum: ['Breakfast', 'Lunch', 'Tea', 'Dinner'] },
});

const Item = mongoose.models.Item || mongoose.model('Item', ItemSchema);

export default Item;