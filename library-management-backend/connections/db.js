import  mongoose  from "mongoose"; 
import dotenv from 'dotenv';

dotenv.config()

const DB_URL = process.env.DB_CONNECTION_STRING;


export const connectDB = async () => {
    try {
      await mongoose.connect(DB_URL);
      console.log("MongoDB connected...");
    } catch (err) {
      console.log(err.message);
      process.exit(1);
    }
  };