import mongoose from "mongoose";
import stateSchema from "../schemas/states.schema.js";


const State = mongoose.model("State", stateSchema);

export default State;