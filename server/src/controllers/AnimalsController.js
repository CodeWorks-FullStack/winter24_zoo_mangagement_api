import { Auth0Provider } from "@bcwdev/auth0provider";
import { animalsService } from "../services/AnimalsService.js";
import BaseController from "../utils/BaseController.js";
import { showAnimalsService } from "../services/ShowAnimalsService.js";

export class AnimalsController extends BaseController {
  constructor () {
    super('api/animals')
    this.router
      .get('', this.getAnimals)
      // NOTE we supply the animal id here in our route parameters so we can use it in our service to only get animalShows pertaining to a certain animal
      .get('/:animalId/showanimals', this.getAnimalShowsByAnimalId)
      // NOTE middleware, all requests under this .use require a bearer token from your Auth0
      // NOTE all requests that pass through this middleware will have userInfo as a property that can be accessed on the request
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAnimal)
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAnimals(request, response, next) {
    try {
      const animals = await animalsService.getAnimals()
      response.send(animals)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAnimalShowsByAnimalId(request, response, next) {
    try {
      const animalId = request.params.animalId
      const animalShows = await showAnimalsService.getAnimalShowsByAnimalId(animalId)
      response.send(animalShows)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createAnimal(request, response, next) {
    try {
      const animalData = request.body

      // NOTE grab user id using bearer token, matches the id of the user stored in the account collection
      // @ts-ignore
      const userId = request.userInfo.id


      // NOTE attach actual user's id to request body, never trust the client
      animalData.creatorId = userId

      const animal = await animalsService.createAnimal(animalData)
      response.send(animal)
    } catch (error) {
      next(error)
    }
  }
}