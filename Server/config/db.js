import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
