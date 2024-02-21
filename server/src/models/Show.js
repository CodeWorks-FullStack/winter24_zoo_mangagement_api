import { Schema } from "mongoose";

export const ShowSchema = new Schema(
  {
    title: { type: String, required: true, minLength: 10, maxLength: 100 }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)