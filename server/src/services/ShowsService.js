import { dbContext } from "../db/DbContext.js"

class ShowsService {
  async getShows() {
    const shows = await dbContext.Shows.find()
    return shows
  }
  async createShow(showData) {
    const show = await dbContext.Shows.create(showData)
    return show
  }
}

export const showsService = new ShowsService()