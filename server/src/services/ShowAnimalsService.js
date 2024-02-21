import { dbContext } from "../db/DbContext.js"

class ShowAnimalsService {

  async createShowAnimal(showAnimalData) {
    const showAnimal = await dbContext.ShowAnimals.create(showAnimalData)
    await showAnimal.populate('animal')
    await showAnimal.populate('show')
    return showAnimal
  }

  async getShowAnimalsByShowId(showId) {
    // showAnimals.filter(showAnimal => showAnimal.showId == '65d64d07fe9caa335d9a150b')
    const showAnimals = await dbContext.ShowAnimals.find({ showId: showId })
      .populate('animal')
      .populate('show')
    return showAnimals
  }
  async getAnimalShowsByAnimalId(animalId) {
    const animalShows = await dbContext.ShowAnimals.find({ animalId: animalId }).populate('show')
    return animalShows
  }
}

export const showAnimalsService = new ShowAnimalsService()