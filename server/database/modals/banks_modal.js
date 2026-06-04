import mongoose from "mongoose";
import bankSchema from "../schemas/banks_schema.js";


const Bank = mongoose.model("Bank", bankSchema);

export default Bank;