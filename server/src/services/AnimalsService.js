import { dbContext } from "../db/DbContext.js"

class AnimalsService {
  async getAnimals() {
    const animals = await dbContext.Animals.find().populate('creator', 'name')
    return animals
  }
  async createAnimal(animalData) {
    const animal = await dbContext.Animals.create(animalData)
    return animal
  }
}

export const animalsService = new AnimalsService()