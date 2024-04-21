import mongoose from 'mongoose';

const helpRequestSchema = new mongoose.Schema({
  userInput: { type: String, required: true },
  userEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const HelpRequest = mongoose.models.HelpRequest || mongoose.model('HelpRequest', helpRequestSchema);

export default HelpRequest;