import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { showAnimalsService } from "../services/ShowAnimalsService.js";

export class ShowAnimalsController extends BaseController {
  constructor () {
    super('api/showanimals')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createShowAnimal)
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createShowAnimal(request, response, next) {
    try {
      const showAnimalData = request.body
      const showAnimal = await showAnimalsService.createShowAnimal(showAnimalData)
      response.send(showAnimal)
    } catch (error) {
      next(error)
    }
  }
}