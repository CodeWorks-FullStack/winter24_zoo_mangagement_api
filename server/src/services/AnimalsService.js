import { dbContext } from "../db/DbContext.js"

class AnimalsService {
  async getAnimals() {
    // NOTE we use .populate here to access the account information through the virtual property we set up in the animal schema. The first argument passed is the name of the virtual, the second argument is optional to select only certain pieces of data from the account collection
    const animals = await dbContext.Animals.find().populate('creator', 'name')
    return animals
  }
  async createAnimal(animalData) {
    const animal = await dbContext.Animals.create(animalData)
    return animal
  }
}

export const animalsService = new AnimalsService()