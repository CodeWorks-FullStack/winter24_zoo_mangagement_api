import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";

export class ShowsController extends BaseController {
  constructor () {
    super('api/shows')
    this.router
      .get('', this.getShows)
      .post('', this.createShow)
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
}