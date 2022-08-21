import BaseRoute from './_BaseRoute'
import * as router from './_Routers'

class Route extends BaseRoute {
  protected routes(): void {
    this.router.use('/auth', router.authRoute)
    this.router.use('/users', router.userRoute)
  }
}

export default new Route().router
