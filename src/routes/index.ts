import { Router } from 'express'
import userRoute from './userRoute'

class Route {
  public router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }
  private routes(): void {
    this.router.use('/users', userRoute)
  }
}

export default new Route().router
