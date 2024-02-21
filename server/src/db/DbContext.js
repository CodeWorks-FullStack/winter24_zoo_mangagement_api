import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { AnimalSchema } from '../models/Animal.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Animals = mongoose.model('Animal', AnimalSchema)
}

export const dbContext = new DbContext()
