import { showAnimalsService } from "../services/ShowAnimalsService.js";
import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";

export class ShowsController extends BaseController {
  constructor () {
    super('api/shows')
    this.router
      .get('', this.getShows)
      .post('', this.createShow)
      // NOTE we supply a showId in our parameters that we use to only get showAnimals participating in a specific show
      .get('/:showId/showanimals', this.getShowAnimalsByShowId)
  }

  async createShow(request, response, next) {
    try {
      const showData = request.body
      const show = await showsService.createShow(showData)
      response.send(show)
    } catch (error) {
      next(error)
    }
  }

  async getShows(request, response, next) {
    try {
      const shows = await showsService.getShows()
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }

  /**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */

  async getShowAnimalsByShowId(request, response, next) {
    try {
      const showId = request.params.showId
      const showAnimals = await showAnimalsService.getShowAnimalsByShowId(showId)
      response.send(showAnimals)
    } catch (error) {
      next(error)
    }
  }
}