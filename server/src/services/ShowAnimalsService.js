import { dbContext } from "../db/DbContext.js"

class ShowAnimalsService {

  async createShowAnimal(showAnimalData) {
    const showAnimal = await dbContext.ShowAnimals.create(showAnimalData)
    // NOTE you cannot create and populate on the same line, on a create your must drop a line down and await your populates on the mongoose object
    await showAnimal.populate('animal')
    await showAnimal.populate('show')
    return showAnimal
  }

  async getShowAnimalsByShowId(showId) {
    // showAnimals.filter(showAnimal => showAnimal.showId == '65d64d07fe9caa335d9a150b')
    // NOTE find can take in an optional filter object to filter the results coming from the database. The key is the field you are looking at on each document in the database, and the value is a match for the field to be included in the results. 
    // const showAnimals = await dbContext.ShowAnimals.find({ showId: '65d64d07fe9caa335d9a150b' })
    // const mazdaCars = await dbContext.Cars.find({ make: 'mazda' })
    // NOTE our variable name and our key have the same name here, so it looks a bit odd
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