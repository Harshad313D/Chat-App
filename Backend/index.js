import express from 'express';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js'
import { DB_NAME } from './utils/constants.js';


const app   = express();
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT||5000;
const MONGODB_URI = process.env.MONGODB_URI;

try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MOngoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);

}catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1)
}

 app.use("/user",userRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));