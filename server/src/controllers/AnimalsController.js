import { Auth0Provider } from "@bcwdev/auth0provider";
import { animalsService } from "../services/AnimalsService.js";
import BaseController from "../utils/BaseController.js";

export class AnimalsController extends BaseController {
  constructor () {
    super('api/animals')
    this.router
      .get('', this.getAnimals)
      // NOTE middleware, all requests under this .use require a bearer token from your Auth0 
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
  async createAnimal(request, response, next) {
    try {
      const animalData = request.body
      const animal = await animalsService.createAnimal(animalData)
      response.send(animal)
    } catch (error) {
      next(error)
    }
  }
}