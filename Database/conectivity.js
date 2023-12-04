import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const dbConnectionString = process.env.MONGO_DB_URL;

export const client = new MongoClient(dbConnectionString);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(dbConnectionString);
    console.log("connected to db");
    return connection;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
