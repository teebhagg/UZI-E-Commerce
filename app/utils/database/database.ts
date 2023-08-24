import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;

export const connectToDB = async() => {
    if (isConnected) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName:"IndexCluster",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        isConnected = true;
        console.log("Connected To DB")
    } catch (error) {
        console.log(error)
    }
}