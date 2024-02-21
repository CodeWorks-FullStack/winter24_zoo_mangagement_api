import { Schema } from "mongoose";

export const AnimalSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 2, maxLength: 25 },
    emoji: { type: String, required: true, maxLength: 5 },
    mood: { type: String, enum: ['happy', 'sad', 'hungry', 'awake'], default: 'happy', required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true
  }
)