import mongoose from "mongoose";
import dotenv from "dotenv";
import userSeeder from "../database/seeders/user_seeder.js";

dotenv.config();

const runSeeders = async () => {
  const url = process.env.DBURL;

  if (!url) {
    throw new Error("Database URL is missing in .env file");
  }
  try {
    await mongoose.connect(url);
    await userSeeder();
    console.log("All Seeders Executed Successfully");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runSeeders();
