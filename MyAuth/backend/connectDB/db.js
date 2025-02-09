import mongoose from "mongoose";


const connectDB = async ()=> {
    try {
        mongoose.connect('mongodb://localhost:27017/auth')
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database Connection Failed")
    }
}

export default connectDB