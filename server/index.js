import express from 'express';
import connectDB from './config/db.js'
import dotenv from "dotenv";
import userRoutes from "./routers/userRoute.js"
import langRoutes from "./routers/langRoute.js"
import cors from 'cors'

dotenv.config();

const app = express();

const PORT = 5000;

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use("/", userRoutes);

app.use("/lang", langRoutes);

app.listen(PORT, () => {
    
    try {

        console.log("listening on port 5000");

    } catch (error) {
        
        console.log(error);
    }
})