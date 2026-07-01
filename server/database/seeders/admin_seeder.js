import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../modals/admin_modal.js";

const adminSeeder = async () => {
  await Admin.deleteMany({});
  await Admin.create({
    name: "Super Admin",
    email: "admin@gmail.com",
    password: "Admin@123",
    role: "admin",
    profilePic: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFufGVufDB8fDB8fHww",
    permissions: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
    isActive: true
  });

  console.log("Admin Seeded Successfully ✅");
};

export default adminSeeder;
