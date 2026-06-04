import mongoose from "mongoose";
import dotenv from "dotenv";
import userSeeder from "../database/seeders/user_seeder.js";
import securityQuestionSeeder from "../database/seeders/security_question_seeder.js";
import bankSeeder from "../database/seeders/banks_seeder.js";
import stateSeeder from "../database/seeders/states_seeder.js";
import citySeeder from "../database/seeders/city_seeder.js";

dotenv.config();

const runSeeders = async () => {
  const url = process.env.DBURL;

  if (!url) {
    throw new Error("Database URL is missing in .env file");
  }
  try {
    await mongoose.connect(url);
    await stateSeeder();
    await citySeeder();
    await bankSeeder();
    await securityQuestionSeeder();
    await userSeeder();
    console.log("All Seeders Executed Successfully");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runSeeders();
