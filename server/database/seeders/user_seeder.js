import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../modals/user_modal.js";

const userSeeder = async () => {
  await User.create({
    role: "customer",
    email: "lara@example.com",
    password: "123456",

    info: {
      profilePic: "profile.jpg",
      firstName: "Lara",
      lastName: "Asin",
      phone: 9876543210,
      dob: new Date("1999-05-10"),
      gender: "Male",
    },

    address: {
      zipcode: 201001,
      house: "H-101",
      street: "Main Road",
      area: "Indirapuram",
      landmark: "Near Metro",
      state: "Uttar Pradesh",
      city: "Ghaziabad",
    },

    bankDetails: {
      acountHolderName: "Lara Asin",
      accountNumber: 1234567890,
      bank: "SBI",
      ifsc: "SBIN0001234",
    },

    documents: {
      aadharCard: 123412341234,
      panCard: "ABCDE1234F",
      fssai: 12345678901234,
      gst: 123456789,
    },

    securityQuestions: [
      {
        question: "What is your pet name?",
        answer: "Tommy",
      },
    ],

    onboardingStep: 6,
  });

  console.log("User Created by Seed ✅");
};

export default userSeeder;
