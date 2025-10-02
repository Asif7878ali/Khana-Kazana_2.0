import mongoose from "mongoose";

const user_schema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["customer", "vendor"],
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    // Step 2: Personal Info
    info: {
      profilePic: { type: String },
      firstName: { type: String },
      lastName: { type: String },
      phone: { type: Number },
      dob: { type: Date },
      gender: { type: String },
    },

    // Step 3: Address Info
    address: {
      zipcode: { type: Number },
      house: { type: String },
      street: { type: String },
      area: { type: String },
      landmark: { type: String },
      state: { type: String },
      city: { type: String },
    },

    // Step 4: Bank Details
    bankDetails: {
      acountHolderName: { type: String },
      accountNumber: { type: Number },
      bank: { type: String },
      bankDocument: { type: String },
      ifsc: { type: String },
    },

    // Step 5: Documents
    documents: {
      aadharCard: { type: Number },
      panCard: { type: String },
      fssai: { type: Number },
      gst: { type: Number },
    },

    // Step 6: Security Questions
    securityQuestions: {
      type: [
        {
          question: String,
          answer: String,
        },
      ],
      required: false,
      default: undefined,
    },

    // Step tracking
    onboardingStep: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

//Modal
const Users = mongoose.model("Users", user_schema);

export default Users;
