import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const url = process.env.DBURL;
  try {
    const isConnect = await mongoose.connect(url);
    console.log("✅ Connect to the Database :", isConnect?.connection?.host);
  } catch (error) {
    console.log("❌ Database connection failed:", error.message);
    process.exit(0);
  }
};

export default Connection;
