import BaseRoute from './_BaseRoute'
import authControl from 'controllers/authControl'
import authMiddleware from 'middlewares/authMiddleware'

class AuthRoute extends BaseRoute {
  protected routes(): void {
    this.router.post('/login', authMiddleware, authControl.index)
    this.router.post('/register', authControl.create)
  }
}

export default new AuthRoute().router
