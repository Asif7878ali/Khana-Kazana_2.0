import mongoose from "mongoose";

const securityQuestionSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true,
    },

    label: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default securityQuestionSchema;