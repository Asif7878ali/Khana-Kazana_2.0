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
      type: {
        _id: false,
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
          type: String,
          unique: true,
          sparse: true,
          trim: true,
          minlength: [10, "Phone number must be at least 10 digits long"],
          maxlength: [10, "Phone number cannot exceed 10 digits"],
        },
        dob: { type: Date },
        gender: { type: String, enum: ["male", "female"] },
      },
      default: undefined,
    },

    // Step 3: Address Info
    address: {
      type: {
        _id: false,
        zipcode: {
          type: String,
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
      default: undefined,
    },

    // Step 4: Bank Details
    bankDetails: {
      type: {
        _id: false,
        accountHolderName: { type: String },
        accountNumber: {
          type: String,
          trim: true,
          unique: true,
          sparse: true,
          minlength: [9, "Account number must be at least 9 digits long"],
          maxlength: [18, "Account number cannot exceed 18 digits"],
        },
        bank: { type: String },
        ifsc: {
          type: String,
          trim: true,
          uppercase: true,
          minlength: [11, "IFSC code must be at least 11 characters long"],
          maxlength: [11, "IFSC code cannot exceed 11 characters"],
        },
      },
      default: undefined,
    },

    // Step 5: Documents
    documents: {
      type: {
        _id: false,
        aadharCard: {
          number: {
            type: String,
            unique: true,
            sparse: true,
            trim: true,
            minlength: [12, "Aadhar number must be at least 12 digits long"],
            maxlength: [12, "Aadhar number cannot exceed 12 digits"],
          },
          file: { type: String },
          isVerified: { type: Boolean, default: false },
        },
        panCard: {
          number: {
            type: String,
            unique: true,
            sparse: true,
            trim: true,
            uppercase: true,
            minlength: [10, "PAN number must be at least 10 characters long"],
            maxlength: [10, "PAN number cannot exceed 10 characters"],
          },
          file: { type: String },
          isVerified: { type: Boolean, default: false },
        },
        fssai: {
          number: {
            type: String,
            unique: true,
            sparse: true,
            trim: true,
            minlength: [14, "FSSAI number must be at least 14 characters long"],
            maxlength: [14, "FSSAI number cannot exceed 14 characters"],
          },
          file: { type: String },
          isVerified: { type: Boolean, default: false },
        },
        gst: {
          number: {
            type: String,
            unique: true,
            sparse: true,
            trim: true,
            uppercase: true,
            minlength: [15, "GST number must be at least 15 characters long"],
            maxlength: [15, "GST number cannot exceed 15 characters"],
          },
          file: { type: String },
          isVerified: { type: Boolean, default: false },
        },
      },
      default: undefined,
    },

    // Step 6: Security Questions
    securityQuestions: {
      type: [
        {
          _id: false,
          question: String,
          answer: String,
        },
      ],
      required: false,
      default: undefined,
    },

    onboardingStep: {
      type: Number,
      default: 1,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default userSchema;
