import { Schema } from "mongoose";

export const AnimalSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 2, maxLength: 25 },
    emoji: { type: String, required: true, maxLength: 5 },
    mood: { type: String, enum: ['happy', 'sad', 'hungry', 'awake'], default: 'happy', required: true },
    // NOTE object id type from mongodb, looks like this '65d64d07fe9caa335d9a150b'
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

// NOTE a virtual is a piece of code that mongoose can execute for you. In this case, I want to use the creatorId stored on this animal schema to get account information about who created this animal
//creator is the name of your virtual, when you run populate elsewhere you will supply the name of your virtual as an argument, ex: .populate('creator')
AnimalSchema.virtual('creator', {
  localField: 'creatorId', // what I'm using in my search
  ref: 'Account', // where I'm searching
  foreignField: '_id', // what I'm matching with my search
  justOne: true // give me an object back instead of an array of objects
})