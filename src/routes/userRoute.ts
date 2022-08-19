import { Router } from 'express'
import userController from 'controllers/userController'

class UserRoute {
  public router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }
  private routes(): void {
    this.router.get('/', userController.index)
    this.router.post('/', userController.create)
  }
}

export default new UserRoute().router
