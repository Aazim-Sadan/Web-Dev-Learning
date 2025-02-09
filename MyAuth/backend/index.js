import express, { urlencoded } from "express";
import connectDB from "./connectDB/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"
import dotenv from "dotenv";
import cors from "cors";

const app = express()
const PORT = 8000

dotenv.config({});

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:5173", 
      credentials: true,
    })
  );

app.get("/user", (req, res) => {
    res.json("Hello from server")
})

app.use("/api/v1/user", userRouter );



app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at PORT: ${PORT}`)
})
