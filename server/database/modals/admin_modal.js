import mongoose from "mongoose";
import adminSchema from "../schemas/admin_schema.js";

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;