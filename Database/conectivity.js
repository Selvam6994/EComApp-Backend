import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const dbConnectionString = process.env.MONGO_DB_URL;


export const client = new MongoClient(dbConnectionString);


