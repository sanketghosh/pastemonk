import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`SUCCESS: MongoDB connected to ${conn.connection.host}`);
  } catch (error: any) {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  }
};
