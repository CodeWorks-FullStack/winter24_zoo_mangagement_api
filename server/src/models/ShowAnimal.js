import { Schema } from "mongoose";

export const ShowAnimalSchema = new Schema(
  {
    animalId: { type: Schema.Types.ObjectId, required: true, ref: 'Animal' },
    showId: { type: Schema.Types.ObjectId, required: true, ref: 'Show' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

ShowAnimalSchema.virtual('animal', {
  localField: 'animalId',
  ref: 'Animal',
  foreignField: '_id',
  justOne: true
})

ShowAnimalSchema.virtual('show', {
  localField: 'showId',
  ref: 'Show',
  foreignField: '_id',
  justOne: true
})