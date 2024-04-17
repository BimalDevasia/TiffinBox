import mongoose from "mongoose";
const connection = {}
const connectMongoDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return
        }
        const db = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongodb");
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log("Error occured connecting to mongodb", error.message);
    }
}
export default connectMongoDB