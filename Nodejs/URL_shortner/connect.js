import mongoose from "mongoose";

const connectDB = async (url)=>{
    try {
      const connection = await  mongoose.connect(url)
      console.log(`MongoDB connected !! DB HOST : ${connection.connection.host}`);
      
        
    } catch (error) {
        console.log("MONGO connection FAILED ",error)
        process.exit(1)
    }
}

export {connectDB};