import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      maxlength: [20, "Password cannot exceed 20 characters"],
    },

    // Step 2: Personal Info
    info: {
      profilePic: { type: String },
      firstName: {
        type: String,
        trim: true,
        minlength: [4, "First Name must be at least 4 characters long"],
        maxlength: [50, "First Name cannot exceed 50 characters"],
      },
      lastName: {
        type: String,
        trim: true,
        minlength: [4, "Last Name must be at least 4 characters long"],
        maxlength: [50, "Last Name cannot exceed 50 characters"],
      },
      phone: {
        type: Number,
        unique: true,
        trim: true,
        minlength: [10, "Phone number must be at least 10 digits long"],
        maxlength: [10, "Phone number cannot exceed 10 digits"],
      },
      dob: {
        type: Date,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
      },
    },

    // Step 3: Address Info
    address: {
      zipcode: {
        type: Number,
        trim: true,
        minlength: [6, "Zipcode must be at least 6 digits long"],
        maxlength: [6, "Zipcode cannot exceed 6 digits"],
      },
      house: { type: String, trim: true },
      street: { type: String, trim: true },
      area: { type: String, trim: true },
      landmark: { type: String, trim: true },
      state: { type: String },
      city: { type: String },
    },

    // Step 4: Bank Details
    bankDetails: {
      acountHolderName: { type: String },
      accountNumber: {
        type: Number,
        trim: true,
        minlength: [9, "Account number must be at least 9 digits long"],
        maxlength: [18, "Account number cannot exceed 18 digits"],
      },
      bank: { type: String },
      ifsc: {
        type: String,
        trim: true,
        minlength: [11, "IFSC code must be at least 11 characters long"],
        maxlength: [11, "IFSC code cannot exceed 11 characters"],
      },
    },

    // Step 5: Documents
    documents: {
      aadharCard: {
        type: Number,
        trim: true,
        minlength: [12, "Aadhar number must be at least 12 digits long"],
        maxlength: [12, "Aadhar number cannot exceed 12 digits"],
      },
      panCard: {
        type: String,
        trim: true,
        minlength: [10, "PAN number must be at least 10 characters long"],
        maxlength: [10, "PAN number cannot exceed 10 characters"],
      },
      fssai: {
        type: Number,
        trim: true,
        minlength: [14, "FSSAI number must be at least 14 digits long"],
        maxlength: [14, "FSSAI number cannot exceed 14 digits"],
      },
      gst: {
        type: Number,
        trim: true,
        minlength: [15, "GST number must be at least 15 digits long"],
        maxlength: [15, "GST number cannot exceed 15 digits"],
      },
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
  { timestamps: true },
);

export default userSchema;
