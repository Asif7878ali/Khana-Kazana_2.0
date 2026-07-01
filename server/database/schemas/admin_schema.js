import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [4, "Name must be at least 4 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },

    profilePic: {
      type: String,
    },

    role: {
      type: String,
      default: "admin",
    },

    permissions: {
      create: {
        type: Boolean,
        default: false,
      },

      read: {
        type: Boolean,
        default: true,
      },

      update: {
        type: Boolean,
        default: false,
      },

      delete: {
        type: Boolean,
        default: false,
      },
    },

    lastLogin: {
      type: Date,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default adminSchema;
