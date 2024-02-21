import { dbContext } from "../db/DbContext.js"

class ShowAnimalsService {
  async createShowAnimal(showAnimalData) {
    const showAnimal = await dbContext.ShowAnimals.create(showAnimalData)
    await showAnimal.populate('animal')
    await showAnimal.populate('show')
    return showAnimal
  }
}

export const showAnimalsService = new ShowAnimalsService()