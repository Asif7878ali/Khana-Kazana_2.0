import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../modals/user_modal.js";

const userSeeder = async () => {
  await User.deleteMany({});
  await User.create({
    role: "customer",
    email: "lara@example.com",
    password: "123456",

    info: {
      profilePic:
        "https://images.unsplash.com/photo-1644860704769-c61c84be7836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwaGlqYWIlMjBmYWNlfGVufDB8fDB8fHww",
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
        questionId: "Question_1",
        answer: "Cat",
      },
      {
        questionId: "Question_2",
        answer: "Chennai",
      },
      {
        questionId: "Question_3",
        answer: "Red",
      },
    ],

    onboardingStep: 6,
  });

  console.log("User Seeded Successfully ✅");
};

export default userSeeder;
