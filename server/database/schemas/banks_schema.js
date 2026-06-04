import mongoose from "mongoose";

const bankSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    label: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default bankSchema;