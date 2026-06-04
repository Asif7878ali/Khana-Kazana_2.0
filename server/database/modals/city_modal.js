import mongoose from "mongoose";
import citySchema from "../schemas/city_schema.js";


const City = mongoose.model("City", citySchema);

export default City;